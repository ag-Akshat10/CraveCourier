

import { Input } from "@/components/ui/input"
import {Label} from "@/components/ui/label.tsx";
import { Loader2, LockKeyhole, Mail} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Link} from "react-router-dom";
const Login=() => {
    const loading=false;

    return(
        <div className="flex items-center justify-center min-h-screen">
            <form className="md:p-8 w-full max-w-wd rounded-lg md:border border-gray-200  mx-4">
                <div className="mb-4">
                    <h1 className="font-bold text-2xl">CraveCourier</h1>
                </div>
                <div className="mb-4">
                    <div className="relative">

                        <Label>Email</Label>
                        <Input type="email" placeholder="Email" className="pl-10 focus-visible:ring-1"/>

                        <Mail className="absolute inset-y-8 left-3 text-gray-500 pointer-events-none"/>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">

                        <Label>Password</Label>
                        <Input type="password" placeholder="Password" className="pl-10 focus-visible:ring-1"/>

                        <LockKeyhole className="absolute inset-y-8 left-3 text-gray-500 pointer-events-none"/>
                    </div>
                </div>
                <div className="mb-10">
                    {
                        loading ?(
                            <Button disabled className="w-full bg-orange hover:bg-hoverOrange">
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
                            </Button>
                        ):(
                            <Button className="w-full bg-orange hover:bg-hoverOrange">
                                Login
                            </Button>
                        )
                    }

                </div>
                <Separator/>
                <p className="mt-2">
                    Don't have a account?{""}
                    <Link to="/signup" className="text-blue-500"> Signup</Link>
                </p>

            </form>
        </div>
    )
}

export default Login;