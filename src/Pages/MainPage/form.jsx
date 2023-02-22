import React from "react"



const Form = () => {
    return (
        <>
            <div>
                <div className="max-w-3xl mx-auto">


                    <div className="mt-5  md:mt-0">
                        <form action="#" method="POST" >
                            <div className=" sm:overflow-hidden sm:rounded-md">
                                <div className="space-y-6 bg-white px-4 py-5 sm:p-6">


                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                                            Full Name (english)
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                name="fullname"
                                                required='true'
                                                id="fullname"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="Rashed AlSuwaidi"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="fullname_ar" className="block text-sm font-medium text-gray-700">
                                            Full Name (arabic)
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                name="fullname_ar"
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
                                                name="email"
                                                id="email"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="admin@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-3 sm:col-span-2">
                                        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                            Mobile
                                        </label>
                                        <div className="mt-1 flex rounded-md shadow-sm">

                                            <input
                                                type="text"
                                                required='true'
                                                name="mobile"
                                                id="mobile"
                                                className="block w-full flex-1  rounded-md border-gray-300 focus:border-gray-500 focus:ring-gray-500 sm:text-sm"
                                                placeholder="00971500000000"
                                            />
                                        </div>
                                    </div>

                                    <fieldset>
                                        <legend className="sr-only">Workshops</legend>
                                        <div className="text-base font-medium text-gray-900" aria-hidden="true">
                                            Workshops
                                        </div>
                                        <label htmlFor="company-website" className="block text-sm font-medium text-gray-500">
                                            You can choose to attend one or multiple workshops
                                        </label>
                                        <div className="mt-4 space-y-4">
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="work"
                                                        name="comments"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="comments" className="font-medium text-gray-700">
                                                        Work
                                                    </label>
                                                    <p className="text-gray-500">Workshops related to  <span className=" underline text-black font-bold"><a href="https://en.wikipedia.org/wiki/Roko%27s_basilisk">work</a></span>.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="education"
                                                        name="candidates"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="candidates" className="font-medium text-gray-700">
                                                        Education
                                                    </label>
                                                    <p className="text-gray-500">Workshops related to  <span className=" underline text-black font-bold"><a href="https://en.wikipedia.org/wiki/Roko%27s_basilisk">education</a></span>.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start">
                                                <div className="flex h-5 items-center">
                                                    <input
                                                        id="healthcare"
                                                        name="offers"
                                                        type="checkbox"
                                                        className="h-4 w-4 rounded border-gray-300 text-gray-600 focus:ring-gray-500"
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label htmlFor="offers" className="font-medium text-gray-700">
                                                        Healthcare
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
                                <div className=" px-4 py-3 text-center md:text-left sm:px-6">
                                    <button
                                        type="submit"
                                        className="inline-flex justify-center rounded-sm border border-transparent bg-black py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        </>
    )
};

export default Form;
