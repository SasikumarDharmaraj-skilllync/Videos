const LeadForm = () => {
    return (
        <>
            <form className=" txt-white dark_card p-3">
                <h4>Book a Demo</h4>
                <div className="mb-3">
                    <label htmlFor="exampleName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleName1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="examplePhoneNumber1" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="examplePhoneNumber1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleCity1" className="form-label">City</label>
                    <input type="text" className="form-control" id="exampleCity1" />
                </div>
                <div className="btn btn-primary w-100 mt-2">Submit</div>
            </form>
        </>
    )
}

export default LeadForm