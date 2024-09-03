

import { Input } from "@/components/ui/input"
import {Label} from "@/components/ui/label.tsx";
import { Loader2, LockKeyhole, Mail} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Link} from "react-router-dom";
import {ChangeEvent, FormEvent, useState} from "react";
import {LoginInputState, userLoginSchema} from "@/schema/UserSchema.ts";




const Login=() => {
    const [input,setInput]=useState<LoginInputState>({
        email:"",
        password:"",
    });

    const [errors, setErrors] = useState<Partial<LoginInputState>>({});

    const changeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };
    const loginSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();
        const result = userLoginSchema.safeParse(input);
        if (!result.success) {
            const fieldErrors = result.error.formErrors.fieldErrors;
            setErrors(fieldErrors as Partial<LoginInputState>);
            return;
        }
        console.log(input);
    }

    const loading=false;

    return(
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={loginSubmitHandler} className="md:p-8 w-full max-w-wd rounded-lg md:border border-gray-200  mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">CraveCourier</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">

                        <Label>Email</Label>
                        <Input type="email" name="email" placeholder="Email" className="pl-10 focus-visible:ring-1" value={input.email} onChange={changeEventHandler} />

                        <Mail className="absolute inset-y-8 left-3 text-gray-500 pointer-events-none"/>
                        {errors && (
                            <span className="text-xs text-red-500">{errors.email}</span>
                        )}
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">

                        <Label>Password</Label>
                        <Input type="password" name="password" placeholder="Password" className="pl-10 focus-visible:ring-1" value={input.password} onChange={changeEventHandler}/>

                        <LockKeyhole className="absolute inset-y-8 left-3 text-gray-500 pointer-events-none"/>
                        {errors && (
                            <span className="text-xs text-red-500">{errors.password}</span>
                        )}
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
                                Login
                            </Button>
                        )
                    }

                    <div className="mt-4">
                        <Link
                            to="/forgot-password"
                            className="hover:text-blue-500 hover:underline"
                        >
                            Forgot Password
                        </Link>
                    </div>

                </div>
                <Separator/>
                <p className="mt-2">
                    Don't have an account?{""}
                    <Link to="/signup" className="text-blue-500"> Signup</Link>
                </p>

            </form>
        </div>
    )
}

export default Login;