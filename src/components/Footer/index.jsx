import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

function Footer() {
    return (
        <div className="sticky top-full p-16 flex flex-col items-center justify-center bg-secondary text-primary font-Poppins">
            <h1 className="text-xl text-center font-bold mb-2.5">
                Síguenos en nuestras redes!
            </h1>
            <div className="flex gap-5">
                <Icon
                    as={FaTwitter}
                    boxSize={7}
                    _hover={{
                        color: "twitter.500",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                    }}
                />
                <Icon
                    as={FaFacebook}
                    boxSize={7}
                    _hover={{
                        color: "#4267B2",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                    }}
                />
                <Icon
                    as={FaInstagram}
                    boxSize={7}
                    _hover={{
                        color: "gray.500",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                    }}
                />
                <Icon
                    as={FaLinkedin}
                    boxSize={7}
                    _hover={{
                        color: "linkedin.500",
                        cursor: "pointer",
                        transition: "all 0.25s ease",
                    }}
                />
            </div>
        </div>
    );
}

export default Footer;
