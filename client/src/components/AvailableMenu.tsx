import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";


const AvailableMenu = () => {


    return (
        <div className="md:p-4">
            <h1 className="text-xl md:text-2xl font-extrabold mb-6">
                Available Menus
            </h1>
            <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">

                    <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
                        <img
                            src="data:image/jpeg;base64,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"
                            alt="" className="w-full h-40 object-cover" />
                        <CardContent className="p-4">
                            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
                                Tandoori Biryani
                            </h2>
                            <p className="text-sm text-gray-600 mt-2">hello this is a sample decscription</p>
                            <h3 className="text-lg font-semibold mt-4">
                                Price: <span className="text-[#D19254]">100 </span>
                            </h3>
                        </CardContent>
                        <CardFooter className="p-4">
                            <Button

                                className="w-full bg-orange hover:bg-hoverOrange"
                            >
                                Add to Cart
                            </Button>
                        </CardFooter>
                    </Card>

            </div>
        </div>
    );
};

export default AvailableMenu;