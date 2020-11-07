export default function User (props){
    let {user} = props;
    return(
        <div>
            {user.id} - {user.name} - {user.email}
        </div>
    )
}