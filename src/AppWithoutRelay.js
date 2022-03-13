import logo from "./logo.png";
import "./App.css";
import { BrightIDRegistration } from "./components/react-hashmask-registration";
//import { BrightIDRegistration } from "react-hashmask-registration";

function AppWithoutRelay() {
    return (
        <div className="App">
            <header className="App-header">
                <img
                    className="App-header__image"
                    src={logo}
                    alt="The Hashmasks"
                    width="200px"
                />
            </header>
            <main>
                <div className="App-brightid-registration">
                    <BrightIDRegistration
                        context="hashmasks"
                        contractAddr=""
                        mainnetRpcUrl=""
                        walletConnectInfuraId=""

                        // appStoreAndroid="https://play.google.com/store/apps/details?id=org.brightid"
                        // appStoreIos="https://apps.apple.com/us/app/brightid/id1428946820"
                        // brightIdMeetUrl="https://meet.brightid.org"
                        // deepLinkPrefix="brightid://link-verification/http:%2f%2fnode.brightid.org"
                        // faucetClaimURL="https://idchain.one/begin/api/claim"
                        // registrationBlockExplorerUrl="https://explorer.idchain.one"
                        // registrationBlockExplorerTxnPath="/tx/"
                        // registrationChainId="74"
                        // registrationChainName="IDChain"
                        // registrationIconUrl="https://apps.brightid.org/logos/idchain.png"
                        // registrationRpcUrl="https://idchain.one/rpc/"
                        // registrationTokenDecimal="18"
                        // registrationTokenName="Eidi"
                        // verificationUrl="https://app.brightid.org/node/v5/verifications"

                        verificationUrl="https://node.brightid.org/brightid/v6/verifications"
                    />
                </div>
            </main>
           <footer className="App-footer">
                &copy; 2022{" "} 
                <a
                    href="https://www.thehashmasks.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Suum Cuique Labs GmbH
                </a>
            </footer>
        </div>
    );
}

export default AppWithoutRelay;
