import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input4 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Link as Link4 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Form as Form1 } from "@atrilabs/react-component-manifests/src/manifests/Form/Form.tsx";
import { useFlex110Cb, useFlex107Cb, useFlex108Cb, useFlex109Cb, useFlex111Cb, useFlex112Cb, useFlex116Cb, useFlex113Cb, useFlex114Cb, useFlex115Cb, useFlex117Cb, useImage118Cb, useImage119Cb, useImage120Cb, useInput15Cb, useLink71Cb, useLink72Cb, useLink73Cb, useLink74Cb, useLink75Cb, useTextBox175Cb, useImage121Cb, useTextBox176Cb, useForm2Cb, useTextBox177Cb, useLink76Cb, useLink77Cb, useLink78Cb, useLink79Cb, useTextBox178Cb, useTextBox179Cb, useImage122Cb, useImage123Cb, useTextBox180Cb, useImage124Cb, useTextBox181Cb, useTextBox182Cb, useImage125Cb, useTextBox183Cb, useImage126Cb, useTextBox184Cb, useImage127Cb, useTextBox185Cb, useTextBox186Cb } from "../page-cbs/Order";
import "../page-css/Order.css";
import "../custom/Order";

export default function Order() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex110Props = useStore((state)=>state["Order"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["Order"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Flex107Props = useStore((state)=>state["Order"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Order"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex108Props = useStore((state)=>state["Order"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Order"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Order"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Order"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const Flex111Props = useStore((state)=>state["Order"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Order"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex112Props = useStore((state)=>state["Order"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Order"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex116Props = useStore((state)=>state["Order"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Order"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Flex113Props = useStore((state)=>state["Order"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Order"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex114Props = useStore((state)=>state["Order"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Order"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex115Props = useStore((state)=>state["Order"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Order"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex117Props = useStore((state)=>state["Order"]["Flex117"]);
const Flex117IoProps = useIoStore((state)=>state["Order"]["Flex117"]);
const Flex117Cb = useFlex117Cb()
const Image118Props = useStore((state)=>state["Order"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["Order"]["Image118"]);
const Image118Cb = useImage118Cb()
const Image119Props = useStore((state)=>state["Order"]["Image119"]);
const Image119IoProps = useIoStore((state)=>state["Order"]["Image119"]);
const Image119Cb = useImage119Cb()
const Image120Props = useStore((state)=>state["Order"]["Image120"]);
const Image120IoProps = useIoStore((state)=>state["Order"]["Image120"]);
const Image120Cb = useImage120Cb()
const Input15Props = useStore((state)=>state["Order"]["Input15"]);
const Input15IoProps = useIoStore((state)=>state["Order"]["Input15"]);
const Input15Cb = useInput15Cb()
const Link71Props = useStore((state)=>state["Order"]["Link71"]);
const Link71IoProps = useIoStore((state)=>state["Order"]["Link71"]);
const Link71Cb = useLink71Cb()
const Link72Props = useStore((state)=>state["Order"]["Link72"]);
const Link72IoProps = useIoStore((state)=>state["Order"]["Link72"]);
const Link72Cb = useLink72Cb()
const Link73Props = useStore((state)=>state["Order"]["Link73"]);
const Link73IoProps = useIoStore((state)=>state["Order"]["Link73"]);
const Link73Cb = useLink73Cb()
const Link74Props = useStore((state)=>state["Order"]["Link74"]);
const Link74IoProps = useIoStore((state)=>state["Order"]["Link74"]);
const Link74Cb = useLink74Cb()
const Link75Props = useStore((state)=>state["Order"]["Link75"]);
const Link75IoProps = useIoStore((state)=>state["Order"]["Link75"]);
const Link75Cb = useLink75Cb()
const TextBox175Props = useStore((state)=>state["Order"]["TextBox175"]);
const TextBox175IoProps = useIoStore((state)=>state["Order"]["TextBox175"]);
const TextBox175Cb = useTextBox175Cb()
const Image121Props = useStore((state)=>state["Order"]["Image121"]);
const Image121IoProps = useIoStore((state)=>state["Order"]["Image121"]);
const Image121Cb = useImage121Cb()
const TextBox176Props = useStore((state)=>state["Order"]["TextBox176"]);
const TextBox176IoProps = useIoStore((state)=>state["Order"]["TextBox176"]);
const TextBox176Cb = useTextBox176Cb()
const Form2Props = useStore((state)=>state["Order"]["Form2"]);
const Form2IoProps = useIoStore((state)=>state["Order"]["Form2"]);
const Form2Cb = useForm2Cb()
const TextBox177Props = useStore((state)=>state["Order"]["TextBox177"]);
const TextBox177IoProps = useIoStore((state)=>state["Order"]["TextBox177"]);
const TextBox177Cb = useTextBox177Cb()
const Link76Props = useStore((state)=>state["Order"]["Link76"]);
const Link76IoProps = useIoStore((state)=>state["Order"]["Link76"]);
const Link76Cb = useLink76Cb()
const Link77Props = useStore((state)=>state["Order"]["Link77"]);
const Link77IoProps = useIoStore((state)=>state["Order"]["Link77"]);
const Link77Cb = useLink77Cb()
const Link78Props = useStore((state)=>state["Order"]["Link78"]);
const Link78IoProps = useIoStore((state)=>state["Order"]["Link78"]);
const Link78Cb = useLink78Cb()
const Link79Props = useStore((state)=>state["Order"]["Link79"]);
const Link79IoProps = useIoStore((state)=>state["Order"]["Link79"]);
const Link79Cb = useLink79Cb()
const TextBox178Props = useStore((state)=>state["Order"]["TextBox178"]);
const TextBox178IoProps = useIoStore((state)=>state["Order"]["TextBox178"]);
const TextBox178Cb = useTextBox178Cb()
const TextBox179Props = useStore((state)=>state["Order"]["TextBox179"]);
const TextBox179IoProps = useIoStore((state)=>state["Order"]["TextBox179"]);
const TextBox179Cb = useTextBox179Cb()
const Image122Props = useStore((state)=>state["Order"]["Image122"]);
const Image122IoProps = useIoStore((state)=>state["Order"]["Image122"]);
const Image122Cb = useImage122Cb()
const Image123Props = useStore((state)=>state["Order"]["Image123"]);
const Image123IoProps = useIoStore((state)=>state["Order"]["Image123"]);
const Image123Cb = useImage123Cb()
const TextBox180Props = useStore((state)=>state["Order"]["TextBox180"]);
const TextBox180IoProps = useIoStore((state)=>state["Order"]["TextBox180"]);
const TextBox180Cb = useTextBox180Cb()
const Image124Props = useStore((state)=>state["Order"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["Order"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox181Props = useStore((state)=>state["Order"]["TextBox181"]);
const TextBox181IoProps = useIoStore((state)=>state["Order"]["TextBox181"]);
const TextBox181Cb = useTextBox181Cb()
const TextBox182Props = useStore((state)=>state["Order"]["TextBox182"]);
const TextBox182IoProps = useIoStore((state)=>state["Order"]["TextBox182"]);
const TextBox182Cb = useTextBox182Cb()
const Image125Props = useStore((state)=>state["Order"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["Order"]["Image125"]);
const Image125Cb = useImage125Cb()
const TextBox183Props = useStore((state)=>state["Order"]["TextBox183"]);
const TextBox183IoProps = useIoStore((state)=>state["Order"]["TextBox183"]);
const TextBox183Cb = useTextBox183Cb()
const Image126Props = useStore((state)=>state["Order"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["Order"]["Image126"]);
const Image126Cb = useImage126Cb()
const TextBox184Props = useStore((state)=>state["Order"]["TextBox184"]);
const TextBox184IoProps = useIoStore((state)=>state["Order"]["TextBox184"]);
const TextBox184Cb = useTextBox184Cb()
const Image127Props = useStore((state)=>state["Order"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["Order"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox185Props = useStore((state)=>state["Order"]["TextBox185"]);
const TextBox185IoProps = useIoStore((state)=>state["Order"]["TextBox185"]);
const TextBox185Cb = useTextBox185Cb()
const TextBox186Props = useStore((state)=>state["Order"]["TextBox186"]);
const TextBox186IoProps = useIoStore((state)=>state["Order"]["TextBox186"]);
const TextBox186Cb = useTextBox186Cb()

  return (<>
  <Flex4 className="p-Order Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<Flex4 className="p-Order Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Image4 className="p-Order Image121 bpt" {...Image121Props} {...Image121Cb} {...Image121IoProps}/>
<TextBox4 className="p-Order TextBox175 bpt" {...TextBox175Props} {...TextBox175Cb} {...TextBox175IoProps}/>
</Flex4>
<Flex4 className="p-Order Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Link4 className="p-Order Link75 bpt" {...Link75Props} {...Link75Cb} {...Link75IoProps}/>
<Link4 className="p-Order Link74 bpt" {...Link74Props} {...Link74Cb} {...Link74IoProps}/>
<Link4 className="p-Order Link73 bpt" {...Link73Props} {...Link73Cb} {...Link73IoProps}/>
<Link4 className="p-Order Link72 bpt" {...Link72Props} {...Link72Cb} {...Link72IoProps}/>
<Link4 className="p-Order Link71 bpt" {...Link71Props} {...Link71Cb} {...Link71IoProps}/>
</Flex4>
<Flex4 className="p-Order Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Image4 className="p-Order Image120 bpt" {...Image120Props} {...Image120Cb} {...Image120IoProps}/>
<Image4 className="p-Order Image119 bpt" {...Image119Props} {...Image119Cb} {...Image119IoProps}/>
<Image4 className="p-Order Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
<Input4 className="p-Order Input15 bpt" {...Input15Props} {...Input15Cb} {...Input15IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-Order Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<TextBox4 className="p-Order TextBox176 bpt" {...TextBox176Props} {...TextBox176Cb} {...TextBox176IoProps}/>
</Flex4>
<Flex4 className="p-Order Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Form1 className="p-Order Form2 bpt" {...Form2Props} {...Form2Cb} {...Form2IoProps}/>
</Flex4>
<Flex4 className="p-Order Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<Flex4 className="p-Order Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<TextBox4 className="p-Order TextBox177 bpt" {...TextBox177Props} {...TextBox177Cb} {...TextBox177IoProps}/>
<Link4 className="p-Order Link76 bpt" {...Link76Props} {...Link76Cb} {...Link76IoProps}/>
<Link4 className="p-Order Link77 bpt" {...Link77Props} {...Link77Cb} {...Link77IoProps}/>
<Link4 className="p-Order Link78 bpt" {...Link78Props} {...Link78Cb} {...Link78IoProps}/>
<Link4 className="p-Order Link79 bpt" {...Link79Props} {...Link79Cb} {...Link79IoProps}/>
</Flex4>
<Flex4 className="p-Order Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox4 className="p-Order TextBox178 bpt" {...TextBox178Props} {...TextBox178Cb} {...TextBox178IoProps}/>
<Image4 className="p-Order Image122 bpt" {...Image122Props} {...Image122Cb} {...Image122IoProps}/>
<TextBox4 className="p-Order TextBox179 bpt" {...TextBox179Props} {...TextBox179Cb} {...TextBox179IoProps}/>
<Image4 className="p-Order Image123 bpt" {...Image123Props} {...Image123Cb} {...Image123IoProps}/>
<TextBox4 className="p-Order TextBox180 bpt" {...TextBox180Props} {...TextBox180Cb} {...TextBox180IoProps}/>
<Image4 className="p-Order Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<TextBox4 className="p-Order TextBox181 bpt" {...TextBox181Props} {...TextBox181Cb} {...TextBox181IoProps}/>
</Flex4>
<Flex4 className="p-Order Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox4 className="p-Order TextBox182 bpt" {...TextBox182Props} {...TextBox182Cb} {...TextBox182IoProps}/>
<Image4 className="p-Order Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
<TextBox4 className="p-Order TextBox183 bpt" {...TextBox183Props} {...TextBox183Cb} {...TextBox183IoProps}/>
<Image4 className="p-Order Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
<TextBox4 className="p-Order TextBox184 bpt" {...TextBox184Props} {...TextBox184Cb} {...TextBox184IoProps}/>
<Image4 className="p-Order Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<TextBox4 className="p-Order TextBox185 bpt" {...TextBox185Props} {...TextBox185Cb} {...TextBox185IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-Order Flex117 bpt" {...Flex117Props} {...Flex117Cb} {...Flex117IoProps}>
<TextBox4 className="p-Order TextBox186 bpt" {...TextBox186Props} {...TextBox186Cb} {...TextBox186IoProps}/>
</Flex4>
  </>);
}
