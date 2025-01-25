import logoYuan from "/assets/logo-yuan.png";
import logoAegea from "/assets/logo-aegea-cortada.png";
import { Chat } from "./components/Chat";


function App() {
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

                    <Chat />
                </div>
            </div>
        </div>
    );
}

export default App;
