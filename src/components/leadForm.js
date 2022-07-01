const LeadForm = () => {
    return (
        <>
            <form>
                <h4>Book a Demo</h4>
                <div className="mb-3">
                    <label for="exampleName1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleName1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label for="examplePhoneNumber1" className="form-label">Phone Number</label>
                    <input type="text" className="form-control" id="examplePhoneNumber1" />
                </div>
                <div className="mb-3">
                    <label for="exampleCity1" className="form-label">City</label>
                    <input type="text" className="form-control" id="exampleCity1" />
                </div>
                {/* <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <div className="btn btn-primary">Submit</div>
            </form>        </>
    )
}

export default LeadForm