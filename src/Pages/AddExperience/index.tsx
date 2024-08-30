import React, { useState } from 'react'
type ExperienceCardType = {
    title: string;
    description: string;
    date: string;
};

type Props = {}

const ExperienceCard = ({ title, description, date }: ExperienceCardType) => (
    <div className="w-[90%] rounded-lg bg-custom-blue flex flex-col text-white p-[1.25rem] shadow-neon-inverted mx-auto">
        <div className="p-2 mt-2">
            <div className="w-full flex items-center justify-between pb-2 mb-4 border-b border-gray-400">
                <h2 className="font-semibold">{title}</h2>
                <span className="text-xs font-extralight">{date}</span>
            </div>
            <p className="text-justify font-light p-2">
                {description}
            </p>
        </div>
    </div>
);


const AddExperience = (props: Props) => {



    const [title, setTitle] = useState<string>("Add title");
    const [description, setDescription] = useState<string>("Description")
    const [date, setDate] = useState<string>("set Date")
    const [nameCI, setNameCI] = useState<string>("");

    const lableStyle = `p-4 `
    const inputStyle = `p-2 m-1 border-b-2 text-sm`
    return (
        <div className=''>
            <nav className='w-full flex items-center justify-center bg-custom-offWhite shadow-md'>
                <h1 className='p-4 text-2xl '>
                    Add Experience
                </h1>
            </nav>
            <div className='w-[80%] flex items-start justify-between h-[90vh] p-8 mx-auto '>
                <div className='w-[40%] p-4 flex flex-col border-2 rounded-md'>
                    <label className={lableStyle}> Name of Company/Institution </label>
                    <input className={inputStyle} onChange={(e) => setNameCI(e.target.value)} />
                    <label className={lableStyle}> Job Title</label>
                    <input className={inputStyle} onChange={(e) => setTitle(e.target.value)} />
                    <label className={lableStyle}> Date </label>
                    <input className={inputStyle} onChange={(e) => { setDate(e.target.value) }} />
                    <label className={lableStyle}> Description </label>
                    <textarea rows={8} cols={50} className={inputStyle} onChange={(e) => { setDescription(e.target.value) }} />
                    <button className='p-2 mt-2 hover:border-2 hover:shadow-xl '>Submit</button>
                </div>
                <div className='w-[50%] h-full p-4'>
                    <ExperienceCard title={title} description={description} date={date} />
                </div>
            </div>
        </div>
    )
}

export default AddExperience