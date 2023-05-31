import NFTMintButton from "components/NFTMintButton";
import NFTGallery from "components/NFTGallery";
import BankInfo from "components/BankInfo";

const FoundationPage = () => {
  return (
    <div>贊助我們
      <NFTGallery />
      <NFTMintButton />
      <BankInfo />
    </div>
  );
};

export { FoundationPage }