function Notification({ hasNewMassages }) {
  return (
    <div>
        <h2>Inbox</h2>
      {hasNewMassages && <p>You have new messages!</p>}
      {hasNewMassages && <h2>Fariimo ayaad heshay!</h2>} 
    </div>
  );
}

export default Notification;