import { Button } from "@chakra-ui/react";

function Checkout({
    setNameValue,
    setEmailValue,
    setPhoneValue,
    handlePayment,
}) {
    return (
        <div className="p-10 font-Poppins">
            <h1 className="text-3xl text-secondary font-bold">Checkout</h1>
            <h3 className="text-center text-2xl mb-16">
                Ingresa tus datos para finalizar la compra
            </h3>
            <form className="flex justify-center">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="font-bold">
                            Nombre Completo:
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setNameValue(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="font-bold">
                            E-mail:
                        </label>
                        <input
                            type="email"
                            onChange={(e) => setEmailValue(e.target.value)}
                            placeholder="ejemplo@email.com"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="phone-number" className="font-bold">
                            Número de teléfono:
                        </label>
                        <input
                            type="text"
                            onChange={(e) => setPhoneValue(e.target.value)}
                            placeholder="11 1234 5678"
                        />
                    </div>
                    <Button
                        variant={"outline"}
                        colorScheme="whatsapp"
                        onClick={handlePayment}
                    >
                        Pagar
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;
