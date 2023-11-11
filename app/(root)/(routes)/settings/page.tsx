import { SubscriptionButton } from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();

  return ( 
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Settings</h3>
      <div className="text-muted-foreground text-sm">
        {isPro ? "You are currently a Premium member." : "You are currently on a free plan."}
      </div>
      <div className="text-muted-foreground text-sm space-y-2">
      Remember: Our characters are AI virtuosos, masters of make-believe. Their musings are marvelously creative, but purely fictitious. Proceed with caution, and enjoy the show!
      </div>
      <SubscriptionButton isPro={isPro} />
    </div>
   );
}
 
export default SettingsPage;