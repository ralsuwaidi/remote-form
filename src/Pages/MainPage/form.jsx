import React, { useState } from "react"
import Modal from "./Modal";
import { createAccount, createParticipation } from "../../utils/api";

const Form = () => {
    const [name, setName] = useState()
    const [nameAr, setNameAr] = useState()
    const [title, setTitle] = useState('Mr')
    const [jobTitle, setJobTitle] = useState()
    const [entity, setEntity] = useState()
    const [email, setEmail] = useState()
    const [mobile, setMobile] = useState()
    const [work, setWork] = useState(false)
    const [eductation, setEducation] = useState(false)
    const [healthcare, serHealthcare] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalTitle, setModalTitle] = useState("Success!")
    const [modalInfo, setModalInfo] = useState("Your form has been submitted successfully!")
    const [errorResponse, setErrorResponse] = useState(
        {
            fullname: "",
            email: "",
            mobile: ""
        }
    )


    const handleSubmit = async (event) => {
        event.preventDefault();

        // try to create an account using the createAccount function
        try {
            const response = await createAccount(name, email, mobile);
            // log the response to the console
            setErrorResponse({
                fullname: "",
                email: "",
                mobile: ""
            })


            let interest = []
            if (work === true) interest.push("work");
            if (eductation === true) interest.push("education");
            if (healthcare === true) interest.push("healthcare");
            const accountId = response.data.data.id
            const responseParticipation = await createParticipation(accountId, nameAr, jobTitle, entity, title, interest)
            setModalTitle("Success!")
            setModalInfo("Your form has been submitted successfully!")
            event.target.reset();
        }
        // if an error occurs, log the error response data to the console and set the error response state
        catch (error) {

            // loop over errors and save to response
            let allErrors = {}
            for (let i = 0; i < error.response.data.error.details.errors.length; i++) {
                const errorObject = error.response.data.error.details.errors[i]
                allErrors[errorObject.path[0]] = errorObject.message
            }
            setErrorResponse(allErrors)


            // setErrorResponse({

            // })
            setModalTitle(error.response.data.error.message)
            setModalInfo(error.response.data.error.details.errors[0].message)
        }
        // set the isModalOpen state to true to open the modal
        setIsModalOpen(true);

    }



    const handleCloseModal = () => {
        setIsModalOpen(false);
    };


    return (
        <>
            <div>
                <div className="max-w-3xl mx-auto">


                    <div className=" md:mt-0">
                        <form onSubmit={handleSubmit} >
                            <div className=" sm:overflow-hidden sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 pb-5 sm:p-6">


                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                            Full Name (english)
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                name="fullname"
                                                required={true}
                                                onChange={e => setName(e.target.value)}
                                                id="fullname"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="Rashed AlSuwaidi"
                                            />
                                        </div>
                                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">{errorResponse.fullname}</p>

                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="fullname_ar" className="block text-sm font-medium text-gray-700">
                                            Full Name (arabic)
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                name="fullname_ar"
                                                onChange={e => setNameAr(e.target.value)}
                                                id="fullname_ar" dir="rtl"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="راشد السويدي"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="honorific" className="block text-sm font-medium text-gray-700">
                                            Title (honorific)
                                        </label>
                                        <select
                                            id="honorific"
                                            name="country"
                                            onChange={e => setTitle(e.target.value)}
                                            autoComplete="country-name"
                                            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-gray-500 sm:text-sm"
                                        >
                                            <option>Mr</option>
                                            <option>Ms</option>
                                            <option>Excellency</option>
                                        </select>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="job_title" className="block text-sm font-medium text-gray-700">
                                            Job Title
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                name="job_title"
                                                onChange={e => setJobTitle(e.target.value)}
                                                id="job_title"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="SR. Engineer, Project Manager"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="entity" className="block text-sm font-medium text-gray-700">
                                            Entity
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                onChange={e => setEntity(e.target.value)}
                                                name="entity"
                                                id="entity"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="Etisalat, Mubadala "
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                            Email
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                onChange={e => setEmail(e.target.value)}
                                                name="email"
                                                id="email"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="admin@example.com"
                                            />
                                        </div>
                                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">{errorResponse.email}</p>

                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                            Mobile
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                required='true'
                                                onChange={e => setMobile(e.target.value)}
                                                name="mobile"
                                                id="mobile"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="00971500000000"
                                            />
                                        </div>
                                        <p class="mt-2 text-sm text-red-600 dark:text-red-500">{errorResponse.mobile}</p>
                                    </div>

                                    <fieldset>
                                        <legend className="sr-only">Workshops</legend>
                                        <div className="text-base font-medium text-gray-900" aria-hidden="true">
                                            Workshops (optional)
                                        </div>
                                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-500">
                                            You can choose to attend one or multiple workshops
                                        </label>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="work"
                                                        onChange={e => setWork(e.target.checked)}
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                                        Work - day 1
                                                    </label>
                                                    <p className="text-gray-500">Workshops related to  <span className=" underline text-black font-bold"><a href="https://en.wikipedia.org/wiki/Roko%27s_basilisk">work</a></span>.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="education"
                                                        name="candidates"
                                                        onChange={e => setEducation(e.target.checked)}
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="candidates" className="font-medium text-gray-700">
                                                        Education - day 2
                                                    </label>
                                                    <p className="text-gray-500">Workshops related to  <span className=" underline text-black font-bold"><a href="https://en.wikipedia.org/wiki/Roko%27s_basilisk">education</a></span>.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="healthcare"
                                                        onChange={e => serHealthcare(e.target.checked)}
                                                        name="offers"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                        Healthcare - day 2
                                                    </label>
                                                    <p className="text-gray-500">Workshops related to  <span className=" underline text-black font-bold"><a href="https://en.wikipedia.org/wiki/Roko%27s_basilisk">healthcare</a></span>.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>


                                    <div className="pt-3 md:pt-5">
                                        <hr />
                                    </div>


                                </div>
                                <div className=" px-4 py-3  text-center md:text-left sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center w-full md:w-fit rounded-sm border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    title={modalTitle}
                    message={modalInfo}
                    onClose={handleCloseModal}
                />
            </div>


        </>
    )
};

export default Form;
