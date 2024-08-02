import axios from "axios";
import React, { useEffect, useState } from "react";
import AddEmployee from './AddEmployee.jsx';
import EditEmployee from './EditEmployee.jsx';
import { v4 as uuidv4 } from 'uuid';
function Connection(props) {
    const [Id, setId] = useState(uuidv4());
    const [education, seteducation] = useState("");
    const [age, setage] = useState("");
    const [gender, setgender] = useState("");
    const [joiningyear, setjoinyear] = useState("");
    const [city, setcity] = useState("");
    const [paymentTier, setpaymentTier] = useState("");
    const [everBenched, seteverBenched] = useState("");
    const [experienceInCurrentDomain, setexperienceInCurrentDomain] = useState("");
    const [leaveOrNot, setleaveOrNot] = useState("");
    const [employees, setEmployees] = useState([]);
  

    useEffect(() => {
        loadEmployees();
    }, []);

    async function loadEmployees() {
        try {
            const response = await axios.get("http://localhost:8081/api/emp/getAllUser");
            console.log(response.data); // Check the structure of the data here
            if (Array.isArray(response.data)) {
                setEmployees(response.data);
            } else {
                console.error("Unexpected data format:", response.data);
            }
        } catch (error) {
            console.error("Failed to load users", error);
        }
    }


 async function handleSubmitpost(event) {
                event.preventDefault(); 
                try{        
                    await axios.post("http://localhost:8081/api/emp/post", {
                        education,
                        joiningyear,
                        city,
                        paymentTier,
                        age,
                        gender,
                        everBenched,
                        experienceInCurrentDomain,
                        leaveOrNot,
                    });
                    alert("Employee Registered Successfully");
                
                    resetForm();
                    loadEmployees();
               } catch (error) {
                console.error("Employee Registration Failed", error);
                alert("Employee Registration Failed");
               }
      }

    function resetForm() {
        setId("");
        seteducation("");
        setjoinyear("");
        setcity("");
        setpaymentTier("");
        setage("");
        setgender("");
        seteverBenched("");
        setexperienceInCurrentDomain("");
        setleaveOrNot("");
    }

    const showEmployees = true;
    
    function newEmployee(education, joiningyear, city, paymentTier, age, gender, everBenched, experienceInCurrentDomain, LeaveOrNot)
    {
        const newEmployee = { 
            id: uuidv4(),
            education : education,
            joiningyear: joiningyear,
            city : city,
            paymentTier : paymentTier,
            age : age,
            gender : gender,
            everBenched : everBenched,
            experienceInCurrentDomain: experienceInCurrentDomain,
            leaveOrNot : LeaveOrNot,
        };
      setEmployees([...employees, newEmployee]);
    }
    function editEmployee(employee) {
            setId(employee.id); 
            seteducation(employee.education || "");
            setjoinyear(employee.joiningyear || "");
            setcity(employee.city || "");
            setpaymentTier(employee.paymentTier || "");
            setage(employee.age || "");
            setgender(employee.gender || "");
            seteverBenched(employee.everBenched || "");
            setexperienceInCurrentDomain(employee.experienceInCurrentDomain || "");
            setleaveOrNot(employee.leaveOrNot || "");
     }
    return (
        
            <div>     
                    <div  align="centre">
                        {showEmployees ? (
                            <>
                              <AddEmployee newEmployee={newEmployee} />
                            </>
                       ) : (
                           <p>You cannot add the employee</p>
                       )
                       }
                    </div>
                    <br />
             
                    <table className="table table-white" align="center">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Education</th>
                                <th>Join Year</th>
                                <th>City</th>
                                <th>Payment Tier</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Ever Benched</th>
                                <th>Experience in Current Domain</th>
                                <th>Leave or Not</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.length === 0 ? (
                                <tr>
                                    <td colSpan="10">No employee data available.</td>
                                </tr>
                            ) : (
                                employees.map((employee) => (
                                    <tr key={employee.Id}>
                                        <td>{Id}</td>
                                        <td>{employee.education}</td>
                                        <td>{employee.joiningyear}</td>
                                        <td>{employee.city}</td>
                                        <td>{employee.paymentTier}</td>
                                        <td>{employee.age}</td>
                                        <td>{employee.gender}</td>
                                        <td>{employee.everBenched}</td>
                                        <td>{employee.experienceInCurrentDomain}</td>
                                        <td>{employee.leaveOrNot}</td>
                                        

            
                                        <td>
                                        <div  align="centre">
                                                {showEmployees ? (
                                                    <>
                                                    <EditEmployee editEmployee={editEmployee} />
                                                    </>
                                            ) : (
                                                <p>You cannot update the employees</p>
                                            )
                                            }
                                         </div>
                                        </td>

                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
        </div>
    );
}

export default Connection;

