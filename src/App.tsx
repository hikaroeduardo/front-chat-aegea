import { useEffect } from "react";
import { cidades } from "./data/cidades";

import logoYuan from "/assets/logo-yuan.png";
import logoAegea from "/assets/logo-aegea-cortada.png";

import { LuBot } from "react-icons/lu";

type CidadeProps = {
    id: number;
    name: string;
    created_at: string;
    updated_at: string;
    email: string;
    config_email: string;
    cod_credor: string;
    nom_loja: string;
    loja: string;
    credor: string;
};

function App() {
    const pathname = window.location.pathname;

    const matricula = pathname.split("/")[1].split("-")[0];
    const codCidade = pathname.split("-")[1];

    const cidade = cidades.filter(
        (cid: CidadeProps) => cid.cod_credor === codCidade
    );

    useEffect(() => {
        const saveMatriculaAndCodCredor = async () => {
            const dataBody = {
                des_regis: matricula || "",
                cod_credor: codCidade || "",
            };

            await fetch(
                "https://n8n.allstark.com.br/webhook/85eb19c1-e69e-47e9-a293-d2d31df2b072",
                {
                    method: "POST",
                    body: JSON.stringify(dataBody),
                }
            );
        };

        saveMatriculaAndCodCredor();
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center p-6">
            <div className="container mx-auto max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-6 items-center">
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-6">
                            <img
                                src={logoYuan}
                                alt="Yuan Soluções"
                                className="w-28"
                            />

                            <img
                                src={logoAegea}
                                alt="Yuan Soluções"
                                className="w-28"
                            />
                        </div>

                        <h1 className="text-4xl md:text-5xl">
                            Somos uma empresa de cobrança parceira da{" "}
                            <span className="text-[#0027BD] font-semibold">
                                Aegea.
                            </span>
                        </h1>

                        <p className="text-lg">
                            Nos forneça alguns dados para que eu possa te ajudar
                            de maneira rápida e eficiente!
                        </p>
                    </div>

                    <div className="relative">
                        <div className="bg-[#243F93] py-4 px-5 text-white rounded-t-[1rem] flex items-center gap-4">
                            <LuBot size={25} />

                            <h1 className="font-semibold">
                                Assistente Virtual - AEGEA
                            </h1>
                        </div>

                        <iframe
                            src={`https://chat-aegea.zapfacil.pro/aegea?matricula=${matricula}&cidade=${
                                cidade[0]?.credor ? cidade[0].credor : ""
                            }`}
                            style={{
                                border: "none",
                                width: "100%",
                                height: "28rem",
                                borderRadius: "0 0 1rem 1rem",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
