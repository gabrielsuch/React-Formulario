import "./style.css"

const Card = ({data}) => {
    return (
        <>
            {
                data.password === data.confirmPassword?
                <div className="card">
                    <p>Nome: {data.name}</p>
                    <p>Email: {data.email}</p>
                    <p>Senha: {data.password}</p>
                    <p>CPF: {data.cpf}</p>
                    <p>Dia: {data.day}</p>
                    <p>Mês: {data.month}</p>
                    <p>Ano: {data.year}</p>
                    <p>Data de Nascimento: {data.day}/{data.month}/{data.year}</p>
                </div>
                :
                <>
                </>
            }
        </>
    )
}

export default Card