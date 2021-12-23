import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { credencialesUsuario } from "./auth.model";
import * as Yup from 'yup';


export default function FormularioAuth(props: formularioAuthProps) {
    return (
        <Formik initialValues={props.modelo}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                email: Yup.string().required('Este campo es requerido')
                    .email('Debe colocar un email válido'),
                password: Yup.string().required('Este campo es requerido')
            })}
        >
            {formikProps => (
                <Form>
                    <FormGroupText label="Email" campo="email" />
                    <FormGroupText label="Password" campo="password" type="password" />
                    <Button disabled={formikProps.isSubmitting} type="submit">Enviar</Button>
                    <Link className="btn btn-secondary" to="/">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}



interface formularioAuthProps {
    modelo: credencialesUsuario;
    onSubmit(valoreS: credencialesUsuario, acciones: FormikHelpers<credencialesUsuario>): void;
}