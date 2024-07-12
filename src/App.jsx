function StudentProfile(props){
  const {name, course, year } = props;
  return (
    <div>
      <div style={{backgroundColor:"grey"}}>
        <h2 style={{backgroundColor:"green" ,padding:2}}>Name: {name} </h2>
        <p style={{backgroundColor:"yellow", padding:2}}>Course: {course} </p>
        <p style={{backgroundColor:"white", padding:2}}>Duration: March - August</p>
        <p style={{backgroundColor:"blue", padding:2}}>Year: {year}</p>
      </div>
    </div>
  );
}

export default function App(){
  const studentInfo =
  [ 
    {name: "Abdulmumeen Etudaye Musa", course: "Web Development", year: 2024},
    {name: "Aderolu Latifat Adesola", course: "Web Development", year: 2024},
    {name: "Adelabu Muminah Omolara", course: "Web Development", year: 2024},
    {name: "Balogun Waliyat Kehinde", course: "Web Development", year: 2024},
    {name: "Hammed Ahishat Oluwatoyin", course: "Web Development", year: 2024},
    {name: "Obayomi Abdulafeez Ayomide", course: "Web Development", year: 2024},
    {name: "Oriade Latifat Omobolanle", course: "Web Development", year: 2024},
    {name: "Misbaudeen Kehinde Bashorun", course: "Web Development", year: 2024},
    {name: "Yunusa Usman Nuhu", course: "Web Development", year: 2024},
  ];
  return (
    <>
    <div>
      <h1>IOTB TECH C0HORT-3</h1>
      <h2 style={{color:"green"}}>TUTOR: <span style={{fontWeight:10}}>Awwal Adewuyi</span></h2>
      {
        studentInfo.map(function (student)
        { return (
          <StudentProfile
          name = {student.name}
          course = {student.course}
          year = {student.year}
          /> );
        }
        )
      }
    </div>
    </>
    

  )
}