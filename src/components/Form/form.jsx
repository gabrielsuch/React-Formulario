import "./style.css"
import * as yup from "yup"
import {useForm} from "react-hook-form"
import {yupResolver} from "@hookform/resolvers/yup"

const Form = ({submitRegister}) => {

    const formSchema = yup.object().shape({
        name: yup.string().required(<span>Nome Obrigatório</span>).max(18),
        email: yup.string().required(<span>Email Obrigatório</span>).email("Email Inválido"),
        password: yup.string().required(<span>Senha Obrigatória</span>),
        confirmPassword: yup.string().required(<span>Confirmar Senha Obrigatória</span>).oneOf([yup.ref("password"), null], "Senha Diferente"),
        cpf: yup.string().required(<span>CPF Obrigatório</span>).length(11),
        day: yup.number().required(<span>Dia Obrigatório</span>).min(1).max(31),
        month: yup.number().required(<span>Mês Obrigatório</span>).min(1).max(12),
        year: yup.string().required(<span>Ano Obrigatório</span>).length(4),
        terms: yup.boolean().required().oneOf([true], <span>Termos de Serviço Obrigatório</span>),
    })

    const { register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(formSchema)
    })

    return (
        <div className="register">
            <form onSubmit={handleSubmit(submitRegister)}>
                <div className="inputName">
                    <input placeholder="Nome *" {...register("name")}/>
                    {errors.name?.message}
                </div>
                <div className="inputEmail">
                    <input placeholder="Email *" {...register("email")}/>
                    {errors.email?.message}
                </div>
                <div className="inputPassword">
                    <div className="firstPassword">
                        <input type="password" placeholder="Senha *" {...register("password")}/>
                        {errors.password?.message}
                    </div>
                    <div className="secondPassword">
                        <input type="password" placeholder="Confirmar Senha *" {...register("confirmPassword")}/>
                        {errors.confirmPassword?.message}
                    </div>
                </div>
                <div className="inputCpf">
                    <input type="number" placeholder="CPF (somente números) *" {...register("cpf")}/>
                    {errors.cpf?.message}
                </div>
                <div className="inputDateBirth">
                    <div className="day">
                        <input type="number" placeholder="Dia *" {...register("day")}/>
                        {errors.day?.message}
                    </div>
                    <div className="month">
                        <input type="number" placeholder="Mês *" {...register("month")}/>
                        {errors.month?.message}
                    </div>
                    <div className="year">
                        <input type="number" placeholder="Ano *" {...register("year")}/>
                        {errors.year?.message}
                    </div>
                </div>
                <div className="terms">
                    <input type="checkbox" id="terms" {...register("terms")}/>
                    <label for="terms"> Eu aceito os termos de uso da aplicação</label>
                    {errors.terms?.message}
                </div>
                <button type="submit">Cadastrar</button>
                <div className="alreadyHaveAccount">
                    <p>Já possui uma conta?</p>
                </div>
            </form>
        </div>
    )
}

export default Form