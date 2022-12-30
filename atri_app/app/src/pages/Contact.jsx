import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input3 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Link as Link3 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Form } from "@atrilabs/react-component-manifests/src/manifests/Form/Form.tsx";
import { useFlex97Cb, useFlex94Cb, useFlex95Cb, useFlex96Cb, useFlex98Cb, useFlex99Cb, useFlex103Cb, useFlex100Cb, useFlex101Cb, useFlex102Cb, useFlex106Cb, useImage108Cb, useImage109Cb, useImage110Cb, useInput14Cb, useLink62Cb, useLink63Cb, useLink64Cb, useLink65Cb, useLink66Cb, useTextBox161Cb, useImage111Cb, useTextBox162Cb, useForm1Cb, useTextBox163Cb, useLink67Cb, useLink68Cb, useLink69Cb, useLink70Cb, useTextBox164Cb, useTextBox165Cb, useImage112Cb, useImage113Cb, useTextBox166Cb, useImage114Cb, useTextBox167Cb, useTextBox168Cb, useImage115Cb, useTextBox169Cb, useImage116Cb, useTextBox170Cb, useImage117Cb, useTextBox171Cb, useTextBox174Cb } from "../page-cbs/Contact";
import "../page-css/Contact.css";
import "../custom/Contact";

export default function Contact() {
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

  const Flex97Props = useStore((state)=>state["Contact"]["Flex97"]);
const Flex97IoProps = useIoStore((state)=>state["Contact"]["Flex97"]);
const Flex97Cb = useFlex97Cb()
const Flex94Props = useStore((state)=>state["Contact"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Contact"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex95Props = useStore((state)=>state["Contact"]["Flex95"]);
const Flex95IoProps = useIoStore((state)=>state["Contact"]["Flex95"]);
const Flex95Cb = useFlex95Cb()
const Flex96Props = useStore((state)=>state["Contact"]["Flex96"]);
const Flex96IoProps = useIoStore((state)=>state["Contact"]["Flex96"]);
const Flex96Cb = useFlex96Cb()
const Flex98Props = useStore((state)=>state["Contact"]["Flex98"]);
const Flex98IoProps = useIoStore((state)=>state["Contact"]["Flex98"]);
const Flex98Cb = useFlex98Cb()
const Flex99Props = useStore((state)=>state["Contact"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Contact"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex103Props = useStore((state)=>state["Contact"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Contact"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const Flex100Props = useStore((state)=>state["Contact"]["Flex100"]);
const Flex100IoProps = useIoStore((state)=>state["Contact"]["Flex100"]);
const Flex100Cb = useFlex100Cb()
const Flex101Props = useStore((state)=>state["Contact"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Contact"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex102Props = useStore((state)=>state["Contact"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Contact"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex106Props = useStore((state)=>state["Contact"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Contact"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Image108Props = useStore((state)=>state["Contact"]["Image108"]);
const Image108IoProps = useIoStore((state)=>state["Contact"]["Image108"]);
const Image108Cb = useImage108Cb()
const Image109Props = useStore((state)=>state["Contact"]["Image109"]);
const Image109IoProps = useIoStore((state)=>state["Contact"]["Image109"]);
const Image109Cb = useImage109Cb()
const Image110Props = useStore((state)=>state["Contact"]["Image110"]);
const Image110IoProps = useIoStore((state)=>state["Contact"]["Image110"]);
const Image110Cb = useImage110Cb()
const Input14Props = useStore((state)=>state["Contact"]["Input14"]);
const Input14IoProps = useIoStore((state)=>state["Contact"]["Input14"]);
const Input14Cb = useInput14Cb()
const Link62Props = useStore((state)=>state["Contact"]["Link62"]);
const Link62IoProps = useIoStore((state)=>state["Contact"]["Link62"]);
const Link62Cb = useLink62Cb()
const Link63Props = useStore((state)=>state["Contact"]["Link63"]);
const Link63IoProps = useIoStore((state)=>state["Contact"]["Link63"]);
const Link63Cb = useLink63Cb()
const Link64Props = useStore((state)=>state["Contact"]["Link64"]);
const Link64IoProps = useIoStore((state)=>state["Contact"]["Link64"]);
const Link64Cb = useLink64Cb()
const Link65Props = useStore((state)=>state["Contact"]["Link65"]);
const Link65IoProps = useIoStore((state)=>state["Contact"]["Link65"]);
const Link65Cb = useLink65Cb()
const Link66Props = useStore((state)=>state["Contact"]["Link66"]);
const Link66IoProps = useIoStore((state)=>state["Contact"]["Link66"]);
const Link66Cb = useLink66Cb()
const TextBox161Props = useStore((state)=>state["Contact"]["TextBox161"]);
const TextBox161IoProps = useIoStore((state)=>state["Contact"]["TextBox161"]);
const TextBox161Cb = useTextBox161Cb()
const Image111Props = useStore((state)=>state["Contact"]["Image111"]);
const Image111IoProps = useIoStore((state)=>state["Contact"]["Image111"]);
const Image111Cb = useImage111Cb()
const TextBox162Props = useStore((state)=>state["Contact"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Contact"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const Form1Props = useStore((state)=>state["Contact"]["Form1"]);
const Form1IoProps = useIoStore((state)=>state["Contact"]["Form1"]);
const Form1Cb = useForm1Cb()
const TextBox163Props = useStore((state)=>state["Contact"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Contact"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Link67Props = useStore((state)=>state["Contact"]["Link67"]);
const Link67IoProps = useIoStore((state)=>state["Contact"]["Link67"]);
const Link67Cb = useLink67Cb()
const Link68Props = useStore((state)=>state["Contact"]["Link68"]);
const Link68IoProps = useIoStore((state)=>state["Contact"]["Link68"]);
const Link68Cb = useLink68Cb()
const Link69Props = useStore((state)=>state["Contact"]["Link69"]);
const Link69IoProps = useIoStore((state)=>state["Contact"]["Link69"]);
const Link69Cb = useLink69Cb()
const Link70Props = useStore((state)=>state["Contact"]["Link70"]);
const Link70IoProps = useIoStore((state)=>state["Contact"]["Link70"]);
const Link70Cb = useLink70Cb()
const TextBox164Props = useStore((state)=>state["Contact"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Contact"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox165Props = useStore((state)=>state["Contact"]["TextBox165"]);
const TextBox165IoProps = useIoStore((state)=>state["Contact"]["TextBox165"]);
const TextBox165Cb = useTextBox165Cb()
const Image112Props = useStore((state)=>state["Contact"]["Image112"]);
const Image112IoProps = useIoStore((state)=>state["Contact"]["Image112"]);
const Image112Cb = useImage112Cb()
const Image113Props = useStore((state)=>state["Contact"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["Contact"]["Image113"]);
const Image113Cb = useImage113Cb()
const TextBox166Props = useStore((state)=>state["Contact"]["TextBox166"]);
const TextBox166IoProps = useIoStore((state)=>state["Contact"]["TextBox166"]);
const TextBox166Cb = useTextBox166Cb()
const Image114Props = useStore((state)=>state["Contact"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["Contact"]["Image114"]);
const Image114Cb = useImage114Cb()
const TextBox167Props = useStore((state)=>state["Contact"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Contact"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox168Props = useStore((state)=>state["Contact"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Contact"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const Image115Props = useStore((state)=>state["Contact"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["Contact"]["Image115"]);
const Image115Cb = useImage115Cb()
const TextBox169Props = useStore((state)=>state["Contact"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Contact"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const Image116Props = useStore((state)=>state["Contact"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["Contact"]["Image116"]);
const Image116Cb = useImage116Cb()
const TextBox170Props = useStore((state)=>state["Contact"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Contact"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const Image117Props = useStore((state)=>state["Contact"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["Contact"]["Image117"]);
const Image117Cb = useImage117Cb()
const TextBox171Props = useStore((state)=>state["Contact"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Contact"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox174Props = useStore((state)=>state["Contact"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Contact"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()

  return (<>
  <Flex3 className="p-Contact Flex97 bpt" {...Flex97Props} {...Flex97Cb} {...Flex97IoProps}>
<Flex3 className="p-Contact Flex96 bpt" {...Flex96Props} {...Flex96Cb} {...Flex96IoProps}>
<Image3 className="p-Contact Image111 bpt" {...Image111Props} {...Image111Cb} {...Image111IoProps}/>
<TextBox3 className="p-Contact TextBox161 bpt" {...TextBox161Props} {...TextBox161Cb} {...TextBox161IoProps}/>
</Flex3>
<Flex3 className="p-Contact Flex95 bpt" {...Flex95Props} {...Flex95Cb} {...Flex95IoProps}>
<Link3 className="p-Contact Link66 bpt" {...Link66Props} {...Link66Cb} {...Link66IoProps}/>
<Link3 className="p-Contact Link65 bpt" {...Link65Props} {...Link65Cb} {...Link65IoProps}/>
<Link3 className="p-Contact Link64 bpt" {...Link64Props} {...Link64Cb} {...Link64IoProps}/>
<Link3 className="p-Contact Link63 bpt" {...Link63Props} {...Link63Cb} {...Link63IoProps}/>
<Link3 className="p-Contact Link62 bpt" {...Link62Props} {...Link62Cb} {...Link62IoProps}/>
</Flex3>
<Flex3 className="p-Contact Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<Image3 className="p-Contact Image110 bpt" {...Image110Props} {...Image110Cb} {...Image110IoProps}/>
<Image3 className="p-Contact Image109 bpt" {...Image109Props} {...Image109Cb} {...Image109IoProps}/>
<Image3 className="p-Contact Image108 bpt" {...Image108Props} {...Image108Cb} {...Image108IoProps}/>
<Input3 className="p-Contact Input14 bpt" {...Input14Props} {...Input14Cb} {...Input14IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-Contact Flex98 bpt" {...Flex98Props} {...Flex98Cb} {...Flex98IoProps}>
<TextBox3 className="p-Contact TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
</Flex3>
<Flex3 className="p-Contact Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<Form className="p-Contact Form1 bpt" {...Form1Props} {...Form1Cb} {...Form1IoProps}/>
</Flex3>
<Flex3 className="p-Contact Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<Flex3 className="p-Contact Flex100 bpt" {...Flex100Props} {...Flex100Cb} {...Flex100IoProps}>
<TextBox3 className="p-Contact TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
<Link3 className="p-Contact Link67 bpt" {...Link67Props} {...Link67Cb} {...Link67IoProps}/>
<Link3 className="p-Contact Link68 bpt" {...Link68Props} {...Link68Cb} {...Link68IoProps}/>
<Link3 className="p-Contact Link69 bpt" {...Link69Props} {...Link69Cb} {...Link69IoProps}/>
<Link3 className="p-Contact Link70 bpt" {...Link70Props} {...Link70Cb} {...Link70IoProps}/>
</Flex3>
<Flex3 className="p-Contact Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox3 className="p-Contact TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<Image3 className="p-Contact Image112 bpt" {...Image112Props} {...Image112Cb} {...Image112IoProps}/>
<TextBox3 className="p-Contact TextBox165 bpt" {...TextBox165Props} {...TextBox165Cb} {...TextBox165IoProps}/>
<Image3 className="p-Contact Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
<TextBox3 className="p-Contact TextBox166 bpt" {...TextBox166Props} {...TextBox166Cb} {...TextBox166IoProps}/>
<Image3 className="p-Contact Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
<TextBox3 className="p-Contact TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
</Flex3>
<Flex3 className="p-Contact Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox3 className="p-Contact TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<Image3 className="p-Contact Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
<TextBox3 className="p-Contact TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<Image3 className="p-Contact Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
<TextBox3 className="p-Contact TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
<Image3 className="p-Contact Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
<TextBox3 className="p-Contact TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
</Flex3>
</Flex3>
<Flex3 className="p-Contact Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<TextBox3 className="p-Contact TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Flex3>
  </>);
}
