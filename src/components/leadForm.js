const LeadForm = () => {
    return (
        <>
            <form>
                <h4>Book a Demo</h4>
                <div class="mb-3">
                    <label for="exampleName1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleName1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="examplePhoneNumber1" class="form-label">Phone Number</label>
                    <input type="text" class="form-control" id="examplePhoneNumber1" />
                </div>
                <div class="mb-3">
                    <label for="exampleCity1" class="form-label">City</label>
                    <input type="text" class="form-control" id="exampleCity1" />
                </div>
                {/* <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div> */}
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>        </>
    )
}

export default LeadForm