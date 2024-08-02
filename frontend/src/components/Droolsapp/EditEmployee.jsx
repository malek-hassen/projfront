import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import Modal from 'react-bootstrap/Modal';
import  Connection from './Connection';

function EditEmployee(props) {
    const [Id, setId] = useState("");
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
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function handleSubmitput(event) {
        event.preventDefault();
        try {
           
                await axios.put(`http://localhost:8081/api/emp/update`+ Id, {
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
                  alert("Employee Updated Successfully");
                  Connection.resetForm();
                  Connection.loadEmployees();
            } catch (error) {
                console.error("Employee Update Failed", error);
                alert("Employee Update Failed");
        }
     } 
    return ( 
        <>
                         <button
                            onClick={handleShow}
                            className="btn btn-primary mt-4"
                        >
                           edit
                        </button>
                        <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>edit</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form
                                onSubmit={(e) => {
                                    handleClose();
                                    e.preventDefault();
                                    seteducation("");
                                    setjoinyear("");
                                    setcity("");
                                    setpaymentTier("");
                                    setage("");
                                    setgender("");
                                    seteverBenched("");
                                    setexperienceInCurrentDomain("");
                                    setleaveOrNot("");
                                    props.updateEmployee(education, joiningyear, city, paymentTier, age, gender, everBenched, experienceInCurrentDomain, leaveOrNot);
                                }}
                                id="editmodal"
                                className="w-full max-w-sm"
                            >
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="education"
                                        >
                                            education
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                    invalid:border-pink-500 invalid:text-pink-600
                                                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="education"
                                            placeholder="education"
                                            type="text"
                                            value={education}
                                            onChange={(e) => {
                                                seteducation(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="joiningyear"
                                        >
                                            joiningyear
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                            invalid:border-pink-500 invalid:text-pink-600
                                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="role"
                                            placeholder="joiningyear"
                                            type="text"
                                            value={joiningyear}
                                            onChange={(e) => {
                                                setjoinyear(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="city"
                                        >
                                            city
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                         <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-pink-500 invalid:text-pink-600
                                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"                                           
                                             id="role"
                                            placeholder="city"
                                            type="text"
                                            value={city}
                                            onChange={(e) => {
                                                setcity(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="paymentTier"
                                        >
                                            paymentTier
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-pink-500 invalid:text-pink-600
                                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="role"
                                            placeholder="payment"
                                            type="text"
                                            value={paymentTier}
                                            onChange={(e) => {
                                                setpaymentTier(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="age"
                                        >
                                            age
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-pink-500 invalid:text-pink-600
                                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="role"
                                            placeholder="age"
                                            type="text"
                                            value={age}
                                            onChange={(e) => {
                                                setage(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="gender"
                                        >
                                            gender
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-pink-500 invalid:text-pink-600
                                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="role"
                                            placeholder="gender"
                                            type="text"
                                            value={gender}
                                            onChange={(e) => {
                                                setgender(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="everBenched"
                                        >
                                            everBenched
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-pink-500 invalid:text-pink-600
                                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="role"
                                            placeholder="banched"
                                            type="text"
                                            value={everBenched}
                                            onChange={(e) => {
                                                seteverBenched(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="experienceInCurrentDomain"
                                        >
                                            experienceInCurrentDomain
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-pink-500 invalid:text-pink-600
                                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="role"
                                            placeholder="experience"
                                            type="text"
                                            value={experienceInCurrentDomain}
                                            onChange={(e) => {
                                                setexperienceInCurrentDomain(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="md:flex md:items-center mb-6">
                                    <div className="md:w-1/3">
                                        <label
                                            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                                            for="leaveOrNot"
                                        >
                                            leaveOrNot
                                        </label>
                                    </div>
                                    <div className="md:w-2/3">
                                        <input
                                            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                                                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                                                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                                                invalid:border-pink-500 invalid:text-pink-600
                                                focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                                            id="role"
                                            placeholder="leave"
                                            type="text"
                                            defaultValue={employees.leaveOrNot}
                                            value={employees.leaveOrNot}
                                            onChange={(e) => {
                                                setleaveOrNot(e.target.value);
                                            }}
                                        />
                                    </div>
                                </div>
                            
                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <button
                                className="btn btn-primary mt-4"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                            <button
                                className="btn btn-primary mt-4"
                                onClick={handleSubmitput}
                                form="editmodal"
                            >
                               update
                            </button>
                        </Modal.Footer>
                    </Modal>
                    </>
   );
}

export default EditEmployee;
