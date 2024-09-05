import { Input } from "@/components/ui/input"
import { Loader2, LockKeyhole, Mail, Phone, User} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Link} from "react-router-dom";
import {ChangeEvent, FormEvent, useState} from "react";
import {SignupInputState, userSignupSchema} from "@/schema/UserSchema.ts";



const Signup=() => {
    const [input,setInput]=useState<SignupInputState>({
        fullname:"",
        email:"",
        password:"",
        contact:"",
    });

    const [errors, setErrors] = useState<Partial<SignupInputState>>({});

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };
    const loginSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const result = userSignupSchema.safeParse(input);
        // checking form validation
        if(!result.success){
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<SignupInputState>);
            return;
        }


        console.log(input);
    }

    const loading=false;

    return(
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={loginSubmitHandler}
                  className="md:p-8 w-full max-w-wd rounded-lg md:border border-gray-200  mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">CraveCourier</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">


                        <Input type="text" name="fullname" placeholder="Full Name"
                               className="pl-10 focus-visible:ring-1"
                               value={input.fullname} onChange={changeEventHandler}/>

                        <User className="absolute inset-y-3 left-2 text-gray-500 pointer-events-none"/>
                        { errors && <span className="text-xs text-red-500">{errors.fullname}</span>}
                    </div>
                </div>


                <div className="mb-4">
                    <div className="relative">


                        <Input type="email" name="email" placeholder="Email" className="pl-10 focus-visible:ring-1"
                               value={input.email} onChange={changeEventHandler}/>

                        <Mail className="absolute inset-y-3 left-2 text-gray-500 pointer-events-none"/>
                        { errors && <span className="text-xs text-red-500">{errors.email}</span>}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">


                        <Input type="password" name="password" placeholder="Password"
                               className="pl-10 focus-visible:ring-1" value={input.password}
                               onChange={changeEventHandler}/>

                        <LockKeyhole className="absolute inset-y-3 left-2 text-gray-500 pointer-events-none"/>
                        { errors && <span className="text-xs text-red-500">{errors.password}</span>}
                    </div>
                </div>

                <div className="mb-4">
                    <div className="relative">


                        <Input type="text" name="contact" placeholder="Contact"
                               className="pl-10 focus-visible:ring-1"
                               value={input.contact} onChange={changeEventHandler}/>

                        <Phone className="absolute inset-y-3 left-2 text-gray-500 pointer-events-none"/>
                        { errors && <span className="text-xs text-red-500">{errors.contact}</span>}
                    </div>
                </div>

                <div className="mb-10">
                    {
                        loading ? (
                            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin"/> Please wait
                            </Button>
                        ) : (
                            <Button type="submit" className="w-full bg-orange hover:bg-hoverOrange">
                                Signup
                            </Button>
                        )
                    }

                </div>
                <Separator/>
                <p className="mt-2">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500">Login</Link>
                </p>

            </form>
        </div>
    )
}

export default Signup;