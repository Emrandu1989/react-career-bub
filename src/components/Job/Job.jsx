import { IoLocationSharp } from "react-icons/io5";
import { FaCommentDollar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Job = ({job}) => {
    console.log(job)
    const {company_name,id,salary,job_title,job_type,location,logo,remote_or_onsite,job_responsibilit,job_description } = job
    return (
        <div>
             <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE] '>{remote_or_onsite}</button>
        <button className='px-5 py-2 font-extrabold border rounded border-[#7E90FE] mr-4 text-[#7E90FE]  '>{job_type}</button>
    </div>
    <div className="mt-4 flex gap-6">
      <h2 className="flex text-lg items-center gap-2"><IoLocationSharp />{location} </h2>
       <h2 className="text-2xl flex items-center gap-3"><FaCommentDollar />{salary} </h2>
    </div>
    <div className="card-actions">
    <Link to={`/job/${id}`}>    <button className="btn btn-primary">View Details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;