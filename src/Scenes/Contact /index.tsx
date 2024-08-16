import SectionTitle from '@/Shared/Components/SectionTitle'
import { useForm } from "react-hook-form"
require('dotenv').config();
type Props = {}

const Contact = (props: Props) => {

    const { register, trigger, formState: { errors } } = useForm();
    const inputStyles = `bg-transparent border p-2 mt-6 rounded-md`;

    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }

    return (
        <section id="contact" className="mt-2 bg-custom-blue">
            <div className="w-full max-w-screen-lg mx-auto flex flex-col items-start p-6 text-white min-h-[70vh]">
                <SectionTitle number="04." title="Contact" />
                <p className="mx-auto p-4 text-center">
                    {`I'm always interested in new opportunities and collaborations. Feel free to reach out using the form below.`}
                </p>

                <form
                    target="_blank"
                    onSubmit={onSubmit}
                    method="POST"
                    action={`https://formsubmit.co/${process.env.NEXT_PUBLIC_REACT_HOOK_FORM_EMAIL}`}
                    className="flex flex-col gap-4 mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-2/3"
                >
                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Name"
                        {...register("name", { required: true, maxLength: 100 })}
                    />
                    {errors.name && (
                        <p className="mt-1 text-red-600">
                            {errors.name.type === "required" && "This field is required"}
                            {errors.name.type === "maxLength" && "Max Length is 100 characters"}
                        </p>
                    )}

                    <input
                        className={inputStyles}
                        type="text"
                        placeholder="Email"
                        {...register("email", {
                            required: true,
                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        })}
                    />
                    {errors.email && (
                        <p className="mt-1 text-red-600">
                            {errors.email.type === "required" && "This field is required"}
                            {errors.email.type === "pattern" && "Invalid email address"}
                        </p>
                    )}

                    <textarea
                        className={inputStyles}
                        rows={4}
                        placeholder="Message"
                        {...register("message", { required: true, maxLength: 2000 })}
                    />
                    {errors.message && (
                        <p className="mt-1 text-red-600">
                            {errors.message.type === "required" && "This field is required"}
                            {errors.message.type === "maxLength" && "Max Length is 2000 characters"}
                        </p>
                    )}

                    <button
                        type="submit"
                        className="p-4 mt-4 border rounded-md hover:bg-custom-offWhite hover:text-black transition-colors duration-200"
                    >
                        SUBMIT
                    </button>
                </form>
            </div>
        </section>

    )
}

export default Contact



