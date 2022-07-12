


export default function SideBar() {
  return(
<main className="layout">
<section className="sidebar">
  <img
    className="sidebar--centered"
    src="images/logo.png"
    alt="Interview Scheduler"
  />
  <hr className="sidebar__separator sidebar--centered" />
  <nav className="sidebar__menu">
    {/* <DayList days={state.days} value={state.day} onChange={setDay} /> */}
  </nav>
  {/* <img
    // className="sidebar__lhl sidebar--centered"
    // src="images/lhl.png"
    // alt="Lighthouse Labs"
  /> */}
</section>
<section className="schedule">
  <Fragment>
    {/* {schedule}
    <Appointment key="last" time="5pm" /> */}
  </Fragment>
</section>
</main>
);
}