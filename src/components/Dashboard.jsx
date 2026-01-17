function Dashboard({IsLoggedIn}) {
  return (
    <div>
      {IsLoggedIn ? <p>Waad login garaysan tahay!</p> : <p>Fadlan login gare</p>}
      {IsLoggedIn ? <p> yes true</p> : <p> no false</p>}
    </div>
  );
}

export default Dashboard;