import USERS from "../data/users"

function ConditionalRendering(props) {
  if(props.isActive === false)
  return <>Aktif Değil</>

  if(props.isLoading === false)
  return <div>Veriler Yükleniyor...</div>

  return (
    <>
    
    <h2>Şartlı Rendering Kullanıcı Listesi</h2>
    <ul>
      {
        USERS.map((item,index) => <li key={index}>{item}</li>)
      }
    </ul>
    
    </>
  )
}

export default ConditionalRendering