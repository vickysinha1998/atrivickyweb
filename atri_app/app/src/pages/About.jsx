import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Link as Link1 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { Input as Input1 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useFlex33Cb, useFlex34Cb, useDiv17Cb, useFlex35Cb, useFlex36Cb, useFlex38Cb, useFlex39Cb, useFlex40Cb, useFlex41Cb, useFlex42Cb, useFlex32Cb, useFlex46Cb, useFlex47Cb, useFlex48Cb, useFlex72Cb, useFlex69Cb, useFlex70Cb, useFlex71Cb, useFlex75Cb, useTextBox64Cb, useImage37Cb, useTextBox66Cb, useTextBox67Cb, useImage40Cb, useTextBox69Cb, useImage41Cb, useTextBox70Cb, useImage42Cb, useTextBox71Cb, useImage43Cb, useTextBox72Cb, useImage45Cb, useTextBox73Cb, useLink21Cb, useLink22Cb, useLink23Cb, useLink24Cb, useLink25Cb, useImage46Cb, useImage47Cb, useImage48Cb, useInput11Cb, useTextBox100Cb, useImage75Cb, useTextBox101Cb, useImage76Cb, useTextBox102Cb, useImage77Cb, useTextBox103Cb, useTextBox104Cb, useImage78Cb, useTextBox105Cb, useImage79Cb, useImage80Cb, useTextBox106Cb, useTextBox107Cb, useLink49Cb, useLink50Cb, useLink51Cb, useLink52Cb, useTextBox108Cb, useTextBox111Cb } from "../page-cbs/About";
import "../page-css/About.css";
import "../custom/About";

export default function About() {
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

  const Flex33Props = useStore((state)=>state["About"]["Flex33"]);
const Flex33IoProps = useIoStore((state)=>state["About"]["Flex33"]);
const Flex33Cb = useFlex33Cb()
const Flex34Props = useStore((state)=>state["About"]["Flex34"]);
const Flex34IoProps = useIoStore((state)=>state["About"]["Flex34"]);
const Flex34Cb = useFlex34Cb()
const Div17Props = useStore((state)=>state["About"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["About"]["Div17"]);
const Div17Cb = useDiv17Cb()
const Flex35Props = useStore((state)=>state["About"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["About"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["About"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["About"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Flex38Props = useStore((state)=>state["About"]["Flex38"]);
const Flex38IoProps = useIoStore((state)=>state["About"]["Flex38"]);
const Flex38Cb = useFlex38Cb()
const Flex39Props = useStore((state)=>state["About"]["Flex39"]);
const Flex39IoProps = useIoStore((state)=>state["About"]["Flex39"]);
const Flex39Cb = useFlex39Cb()
const Flex40Props = useStore((state)=>state["About"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["About"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["About"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["About"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["About"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["About"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex32Props = useStore((state)=>state["About"]["Flex32"]);
const Flex32IoProps = useIoStore((state)=>state["About"]["Flex32"]);
const Flex32Cb = useFlex32Cb()
const Flex46Props = useStore((state)=>state["About"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["About"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["About"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["About"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Flex48Props = useStore((state)=>state["About"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["About"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex72Props = useStore((state)=>state["About"]["Flex72"]);
const Flex72IoProps = useIoStore((state)=>state["About"]["Flex72"]);
const Flex72Cb = useFlex72Cb()
const Flex69Props = useStore((state)=>state["About"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["About"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex70Props = useStore((state)=>state["About"]["Flex70"]);
const Flex70IoProps = useIoStore((state)=>state["About"]["Flex70"]);
const Flex70Cb = useFlex70Cb()
const Flex71Props = useStore((state)=>state["About"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["About"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex75Props = useStore((state)=>state["About"]["Flex75"]);
const Flex75IoProps = useIoStore((state)=>state["About"]["Flex75"]);
const Flex75Cb = useFlex75Cb()
const TextBox64Props = useStore((state)=>state["About"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["About"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image37Props = useStore((state)=>state["About"]["Image37"]);
const Image37IoProps = useIoStore((state)=>state["About"]["Image37"]);
const Image37Cb = useImage37Cb()
const TextBox66Props = useStore((state)=>state["About"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["About"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const TextBox67Props = useStore((state)=>state["About"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["About"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const Image40Props = useStore((state)=>state["About"]["Image40"]);
const Image40IoProps = useIoStore((state)=>state["About"]["Image40"]);
const Image40Cb = useImage40Cb()
const TextBox69Props = useStore((state)=>state["About"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["About"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Image41Props = useStore((state)=>state["About"]["Image41"]);
const Image41IoProps = useIoStore((state)=>state["About"]["Image41"]);
const Image41Cb = useImage41Cb()
const TextBox70Props = useStore((state)=>state["About"]["TextBox70"]);
const TextBox70IoProps = useIoStore((state)=>state["About"]["TextBox70"]);
const TextBox70Cb = useTextBox70Cb()
const Image42Props = useStore((state)=>state["About"]["Image42"]);
const Image42IoProps = useIoStore((state)=>state["About"]["Image42"]);
const Image42Cb = useImage42Cb()
const TextBox71Props = useStore((state)=>state["About"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["About"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const Image43Props = useStore((state)=>state["About"]["Image43"]);
const Image43IoProps = useIoStore((state)=>state["About"]["Image43"]);
const Image43Cb = useImage43Cb()
const TextBox72Props = useStore((state)=>state["About"]["TextBox72"]);
const TextBox72IoProps = useIoStore((state)=>state["About"]["TextBox72"]);
const TextBox72Cb = useTextBox72Cb()
const Image45Props = useStore((state)=>state["About"]["Image45"]);
const Image45IoProps = useIoStore((state)=>state["About"]["Image45"]);
const Image45Cb = useImage45Cb()
const TextBox73Props = useStore((state)=>state["About"]["TextBox73"]);
const TextBox73IoProps = useIoStore((state)=>state["About"]["TextBox73"]);
const TextBox73Cb = useTextBox73Cb()
const Link21Props = useStore((state)=>state["About"]["Link21"]);
const Link21IoProps = useIoStore((state)=>state["About"]["Link21"]);
const Link21Cb = useLink21Cb()
const Link22Props = useStore((state)=>state["About"]["Link22"]);
const Link22IoProps = useIoStore((state)=>state["About"]["Link22"]);
const Link22Cb = useLink22Cb()
const Link23Props = useStore((state)=>state["About"]["Link23"]);
const Link23IoProps = useIoStore((state)=>state["About"]["Link23"]);
const Link23Cb = useLink23Cb()
const Link24Props = useStore((state)=>state["About"]["Link24"]);
const Link24IoProps = useIoStore((state)=>state["About"]["Link24"]);
const Link24Cb = useLink24Cb()
const Link25Props = useStore((state)=>state["About"]["Link25"]);
const Link25IoProps = useIoStore((state)=>state["About"]["Link25"]);
const Link25Cb = useLink25Cb()
const Image46Props = useStore((state)=>state["About"]["Image46"]);
const Image46IoProps = useIoStore((state)=>state["About"]["Image46"]);
const Image46Cb = useImage46Cb()
const Image47Props = useStore((state)=>state["About"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["About"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image48Props = useStore((state)=>state["About"]["Image48"]);
const Image48IoProps = useIoStore((state)=>state["About"]["Image48"]);
const Image48Cb = useImage48Cb()
const Input11Props = useStore((state)=>state["About"]["Input11"]);
const Input11IoProps = useIoStore((state)=>state["About"]["Input11"]);
const Input11Cb = useInput11Cb()
const TextBox100Props = useStore((state)=>state["About"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["About"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const Image75Props = useStore((state)=>state["About"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["About"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox101Props = useStore((state)=>state["About"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["About"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const Image76Props = useStore((state)=>state["About"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["About"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox102Props = useStore((state)=>state["About"]["TextBox102"]);
const TextBox102IoProps = useIoStore((state)=>state["About"]["TextBox102"]);
const TextBox102Cb = useTextBox102Cb()
const Image77Props = useStore((state)=>state["About"]["Image77"]);
const Image77IoProps = useIoStore((state)=>state["About"]["Image77"]);
const Image77Cb = useImage77Cb()
const TextBox103Props = useStore((state)=>state["About"]["TextBox103"]);
const TextBox103IoProps = useIoStore((state)=>state["About"]["TextBox103"]);
const TextBox103Cb = useTextBox103Cb()
const TextBox104Props = useStore((state)=>state["About"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["About"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const Image78Props = useStore((state)=>state["About"]["Image78"]);
const Image78IoProps = useIoStore((state)=>state["About"]["Image78"]);
const Image78Cb = useImage78Cb()
const TextBox105Props = useStore((state)=>state["About"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["About"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const Image79Props = useStore((state)=>state["About"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["About"]["Image79"]);
const Image79Cb = useImage79Cb()
const Image80Props = useStore((state)=>state["About"]["Image80"]);
const Image80IoProps = useIoStore((state)=>state["About"]["Image80"]);
const Image80Cb = useImage80Cb()
const TextBox106Props = useStore((state)=>state["About"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["About"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox107Props = useStore((state)=>state["About"]["TextBox107"]);
const TextBox107IoProps = useIoStore((state)=>state["About"]["TextBox107"]);
const TextBox107Cb = useTextBox107Cb()
const Link49Props = useStore((state)=>state["About"]["Link49"]);
const Link49IoProps = useIoStore((state)=>state["About"]["Link49"]);
const Link49Cb = useLink49Cb()
const Link50Props = useStore((state)=>state["About"]["Link50"]);
const Link50IoProps = useIoStore((state)=>state["About"]["Link50"]);
const Link50Cb = useLink50Cb()
const Link51Props = useStore((state)=>state["About"]["Link51"]);
const Link51IoProps = useIoStore((state)=>state["About"]["Link51"]);
const Link51Cb = useLink51Cb()
const Link52Props = useStore((state)=>state["About"]["Link52"]);
const Link52IoProps = useIoStore((state)=>state["About"]["Link52"]);
const Link52Cb = useLink52Cb()
const TextBox108Props = useStore((state)=>state["About"]["TextBox108"]);
const TextBox108IoProps = useIoStore((state)=>state["About"]["TextBox108"]);
const TextBox108Cb = useTextBox108Cb()
const TextBox111Props = useStore((state)=>state["About"]["TextBox111"]);
const TextBox111IoProps = useIoStore((state)=>state["About"]["TextBox111"]);
const TextBox111Cb = useTextBox111Cb()

  return (<>
  <Flex1 className="p-About Flex32 bpt" {...Flex32Props} {...Flex32Cb} {...Flex32IoProps}>
<Flex1 className="p-About Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Image1 className="p-About Image45 bpt" {...Image45Props} {...Image45Cb} {...Image45IoProps}/>
<TextBox1 className="p-About TextBox73 bpt" {...TextBox73Props} {...TextBox73Cb} {...TextBox73IoProps}/>
</Flex1>
<Flex1 className="p-About Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Link1 className="p-About Link21 bpt" {...Link21Props} {...Link21Cb} {...Link21IoProps}/>
<Link1 className="p-About Link22 bpt" {...Link22Props} {...Link22Cb} {...Link22IoProps}/>
<Link1 className="p-About Link23 bpt" {...Link23Props} {...Link23Cb} {...Link23IoProps}/>
<Link1 className="p-About Link24 bpt" {...Link24Props} {...Link24Cb} {...Link24IoProps}/>
<Link1 className="p-About Link25 bpt" {...Link25Props} {...Link25Cb} {...Link25IoProps}/>
</Flex1>
<Flex1 className="p-About Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Image1 className="p-About Image46 bpt" {...Image46Props} {...Image46Cb} {...Image46IoProps}/>
<Image1 className="p-About Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Image1 className="p-About Image48 bpt" {...Image48Props} {...Image48Cb} {...Image48IoProps}/>
<Input1 className="p-About Input11 bpt" {...Input11Props} {...Input11Cb} {...Input11IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex33 bpt" {...Flex33Props} {...Flex33Cb} {...Flex33IoProps}>
<TextBox1 className="p-About TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
</Flex1>
<Flex1 className="p-About Flex34 bpt" {...Flex34Props} {...Flex34Cb} {...Flex34IoProps}>
<Div1 className="p-About Div17 bpt" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image1 className="p-About Image37 bpt" {...Image37Props} {...Image37Cb} {...Image37IoProps}/>
</Div1>
<Flex1 className="p-About Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<TextBox1 className="p-About TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<TextBox1 className="p-About TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
</Flex1>
<Flex1 className="p-About Flex38 bpt" {...Flex38Props} {...Flex38Cb} {...Flex38IoProps}>
<Flex1 className="p-About Flex39 bpt" {...Flex39Props} {...Flex39Cb} {...Flex39IoProps}>
<Image1 className="p-About Image40 bpt" {...Image40Props} {...Image40Cb} {...Image40IoProps}/>
<TextBox1 className="p-About TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex1>
<Flex1 className="p-About Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<Image1 className="p-About Image41 bpt" {...Image41Props} {...Image41Cb} {...Image41IoProps}/>
<TextBox1 className="p-About TextBox70 bpt" {...TextBox70Props} {...TextBox70Cb} {...TextBox70IoProps}/>
</Flex1>
<Flex1 className="p-About Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<Image1 className="p-About Image42 bpt" {...Image42Props} {...Image42Cb} {...Image42IoProps}/>
<TextBox1 className="p-About TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
</Flex1>
<Flex1 className="p-About Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<Image1 className="p-About Image43 bpt" {...Image43Props} {...Image43Cb} {...Image43IoProps}/>
<TextBox1 className="p-About TextBox72 bpt" {...TextBox72Props} {...TextBox72Cb} {...TextBox72IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex72 bpt" {...Flex72Props} {...Flex72Cb} {...Flex72IoProps}>
<Flex1 className="p-About Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox1 className="p-About TextBox108 bpt" {...TextBox108Props} {...TextBox108Cb} {...TextBox108IoProps}/>
<Link1 className="p-About Link52 bpt" {...Link52Props} {...Link52Cb} {...Link52IoProps}/>
<Link1 className="p-About Link51 bpt" {...Link51Props} {...Link51Cb} {...Link51IoProps}/>
<Link1 className="p-About Link50 bpt" {...Link50Props} {...Link50Cb} {...Link50IoProps}/>
<Link1 className="p-About Link49 bpt" {...Link49Props} {...Link49Cb} {...Link49IoProps}/>
</Flex1>
<Flex1 className="p-About Flex70 bpt" {...Flex70Props} {...Flex70Cb} {...Flex70IoProps}>
<TextBox1 className="p-About TextBox107 bpt" {...TextBox107Props} {...TextBox107Cb} {...TextBox107IoProps}/>
<Image1 className="p-About Image80 bpt" {...Image80Props} {...Image80Cb} {...Image80IoProps}/>
<TextBox1 className="p-About TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<Image1 className="p-About Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<TextBox1 className="p-About TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<Image1 className="p-About Image78 bpt" {...Image78Props} {...Image78Cb} {...Image78IoProps}/>
<TextBox1 className="p-About TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
</Flex1>
<Flex1 className="p-About Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<TextBox1 className="p-About TextBox103 bpt" {...TextBox103Props} {...TextBox103Cb} {...TextBox103IoProps}/>
<Image1 className="p-About Image77 bpt" {...Image77Props} {...Image77Cb} {...Image77IoProps}/>
<TextBox1 className="p-About TextBox102 bpt" {...TextBox102Props} {...TextBox102Cb} {...TextBox102IoProps}/>
<Image1 className="p-About Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<TextBox1 className="p-About TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<Image1 className="p-About Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
<TextBox1 className="p-About TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-About Flex75 bpt" {...Flex75Props} {...Flex75Cb} {...Flex75IoProps}>
<TextBox1 className="p-About TextBox111 bpt" {...TextBox111Props} {...TextBox111Cb} {...TextBox111IoProps}/>
</Flex1>
  </>);
}
