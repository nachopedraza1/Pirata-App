import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onLoadApplicants } from '../../Redux/Thunks/thunks';

import { doc, updateDoc } from 'firebase/firestore/lite';
import { FirebaseDB } from '../../Firebase/config';

import { TittleComponent } from '../../Ui/Components/TittleComponent';
import { AdminPanelLayout } from '../Layout/AdminPanelLayout';

import { Link, Switch, Tooltip, Table, TableBody, TableCell, TableContainer, TableHead, Paper, TableRow } from '@mui/material';
import { Email, WhatsApp } from '@mui/icons-material';
import { FilterBar } from '../Components/FilterBar';


const TableHeadItem = [
    "Nombre completo",
    "Edad",
    "Nacimiento",
    "Rol seleccionado",
    "Esport",
    "Telefono",
    "Email",
    "Plataforma",
    "Contactado"
];


export const Applicants = () => {

    const dispatch = useDispatch();

    const { applicants } = useSelector(state => state.mainData);

    const [applicantsFilter, setApplicantsFilter] = useState(applicants);

    const [esportFilter, setEsportFilter] = useState([]);

    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    const onFilterList = (type, name) => {
        if (type === "esport") {
            if (name === "Todos") {
                setApplicantsFilter(applicants);
            } else {
                const esportFilter = applicants.filter(member => member.esport === name);
                setApplicantsFilter(esportFilter);
                setEsportFilter(esportFilter);
            }
        } else if (type === "plataform") {
            const plataformFilter = esportFilter.filter(member => member.plataform === name);
            setApplicantsFilter(plataformFilter);
        }
    }

    const calcAge = (date) => {
        const dateNow = new Date();

        const yearNow = parseInt(dateNow.getFullYear());
        const monthNow = parseInt(dateNow.getMonth() + 1);
        const dayNow = parseInt(dateNow.getDate());

        const month = parseInt(String(date).substring(0, 2));
        const day = parseInt(String(date).substring(3, 5));
        const year = parseInt(String(date).substring(6, 10));

        let age = yearNow - year;
        if (monthNow < month) {
            age--;
        }
        if (monthNow === month) {
            if (dayNow < day) {
                age--;
            }
        }
        return age;
    }

    const findEsportLogo = (esport) => {
        const logoEsport =
            (esport === "Fifa") ? "logo-fifa.png"
                : (esport === "Free fire") ? "FREEFIRE BATTLEGROUNDS.png"
                    : (esport === "League of Legends") ? "LEAGUE OF LEGENDS.png"
                        : (esport === "Counter Strike") ? "COUNTER STRIKE.png"
                            : (esport === "Formula 1") ? "FORMULA1.png"
                                : (esport === "Fortnite") ? "fortnite.png"
                                    : null
        return logoEsport;
    }

    const findPlataformLogo = (plataform) => {
        const logoEsport =
            (plataform === "Play Station 4" || plataform === "Play Station 5") ? "play.png"
                : (plataform === "Mobile") ? "mobile.png"
                    : (plataform === "XBOX") ? "xbox.png"
                        : (plataform === "PC") ? "pc.png"
                            : null
        return logoEsport;
    }

    const onChangeStatus = async (id, checked) => {
        const queryRef = doc(FirebaseDB, "applicants", id);
        await updateDoc(queryRef, {
            checked: !checked
        })
        dispatch(onLoadApplicants());
    }

    return (
        <AdminPanelLayout>

            <TittleComponent tittle="POSTULANTES" component={<FilterBar onFilterList={onFilterList} totalFiltered={applicantsFilter.length} />} />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="table-players">
                    <TableHead >
                        <TableRow>
                            {
                                TableHeadItem.map(item => (<TableCell key={item} align="left" sx={{ color: "white" }}> {item} </TableCell>))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {applicantsFilter.map((player) => (
                            <TableRow
                                key={player.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {player.name + " " + player.lastname}
                                </TableCell>

                                <TableCell align="left">
                                    {calcAge(player.fecha)}
                                </TableCell>

                                <TableCell align="left"> {player.fecha} </TableCell>
                                <TableCell align="left"> {player.rol} </TableCell>

                                <TableCell align="left">
                                    {
                                        (player.esport != "No soy gamer")
                                            ? <img src={`/assets/images/esports/${findEsportLogo(player.esport)}`} style={{ maxWidth: "100px" }} />
                                            : player.esport
                                    }
                                </TableCell>

                                <TableCell align="left">
                                    <Link href={`https://wa.me/${player.phone.replace(/\D/g, '')}`} target="_blank" underline='none'>
                                        <Tooltip title={player.phone.replace(/\D/g, '')}>
                                            <WhatsApp />
                                        </Tooltip>
                                    </Link>
                                </TableCell>

                                <TableCell align="left">
                                    <Link href={`mailto:${player.email}`}>
                                        <Tooltip title={player.email}>
                                            <Email />
                                        </Tooltip>
                                    </Link>
                                </TableCell>


                                <TableCell align="left"> <img src={`/assets/images/${findPlataformLogo(player.plataform)}`} style={{ maxWidth: "30px" }} alt="" /> </TableCell>
                                <TableCell align="left"> <Switch {...label} onChange={() => onChangeStatus(player.id, player.checked)} defaultChecked={player.checked} /> </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </AdminPanelLayout>
    )
}



