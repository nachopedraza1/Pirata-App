import { useState, useEffect, useMemo } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState(initialForm);
    const [formValidation, setFormValidation] = useState({});

    useEffect(() => {
        createValidators();
    }, [formState]);

    const isFormValid = useMemo(() => {
        for (const formField of Object.keys(formValidation)) {
            if (formValidation[formField] !== null) return false;
            return true;
        }
    }, [formValidation])

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value,
        })
    }

    const createValidators = () => {
        const checkedFormValues = {}

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];
            checkedFormValues[`${formField}Validate`] = fn(formState[formField]) ? null : errorMessage;
            setFormValidation(checkedFormValues)
        }
    }


    return {
        ...formState,
        ...formValidation,
        formState,
        onInputChange,
        isFormValid,
    }
}
