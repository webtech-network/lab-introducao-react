import BackButton from "./_backButton";
import DivDemonstrationHooks from "./_divDemonstrationHooks";

export default function controlPageHooks({
  children, noBackButton = false
}: Readonly<{ children: React.ReactNode, noBackButton?: boolean }>) {
  return (
    <div>
      <BackButton noBackButton = {noBackButton}/>
      <DivDemonstrationHooks>{children}</DivDemonstrationHooks>
    </div>
  );
}
