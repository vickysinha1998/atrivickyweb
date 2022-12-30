import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div as Div2 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Input as Input2 } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { Link as Link2 } from "@atrilabs/react-component-manifests/src/manifests/Link/Link.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex79Cb, useFlex76Cb, useFlex77Cb, useFlex78Cb, useFlex80Cb, useFlex81Cb, useDiv18Cb, useDiv19Cb, useDiv20Cb, useDiv27Cb, useFlex84Cb, useDiv32Cb, useDiv33Cb, useDiv34Cb, useDiv35Cb, useFlex88Cb, useFlex85Cb, useFlex86Cb, useFlex87Cb, useFlex92Cb, useImage81Cb, useImage82Cb, useImage83Cb, useInput13Cb, useLink53Cb, useLink54Cb, useLink55Cb, useLink56Cb, useLink57Cb, useTextBox112Cb, useImage84Cb, useTextBox113Cb, useTextBox114Cb, useButton7Cb, useTextBox115Cb, useImage85Cb, useButton8Cb, useTextBox117Cb, useImage86Cb, useTextBox139Cb, useTextBox118Cb, useButton9Cb, useTextBox119Cb, useImage87Cb, useTextBox116Cb, useTextBox130Cb, useImage93Cb, useButton18Cb, useButton19Cb, useImage98Cb, useTextBox140Cb, useTextBox141Cb, useImage99Cb, useTextBox142Cb, useButton20Cb, useTextBox143Cb, useTextBox144Cb, useImage100Cb, useTextBox145Cb, useButton21Cb, useImage101Cb, useTextBox146Cb, useButton22Cb, useTextBox147Cb, useTextBox148Cb, useLink58Cb, useLink59Cb, useLink60Cb, useLink61Cb, useTextBox149Cb, useTextBox150Cb, useImage102Cb, useImage103Cb, useTextBox151Cb, useImage104Cb, useTextBox152Cb, useTextBox153Cb, useImage105Cb, useTextBox154Cb, useImage106Cb, useTextBox155Cb, useImage107Cb, useTextBox156Cb, useTextBox160Cb } from "../page-cbs/Shop";
import "../page-css/Shop.css";
import "../custom/Shop";

export default function Shop() {
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

  const Flex79Props = useStore((state)=>state["Shop"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Shop"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex76Props = useStore((state)=>state["Shop"]["Flex76"]);
const Flex76IoProps = useIoStore((state)=>state["Shop"]["Flex76"]);
const Flex76Cb = useFlex76Cb()
const Flex77Props = useStore((state)=>state["Shop"]["Flex77"]);
const Flex77IoProps = useIoStore((state)=>state["Shop"]["Flex77"]);
const Flex77Cb = useFlex77Cb()
const Flex78Props = useStore((state)=>state["Shop"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Shop"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex80Props = useStore((state)=>state["Shop"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Shop"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex81Props = useStore((state)=>state["Shop"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Shop"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Div18Props = useStore((state)=>state["Shop"]["Div18"]);
const Div18IoProps = useIoStore((state)=>state["Shop"]["Div18"]);
const Div18Cb = useDiv18Cb()
const Div19Props = useStore((state)=>state["Shop"]["Div19"]);
const Div19IoProps = useIoStore((state)=>state["Shop"]["Div19"]);
const Div19Cb = useDiv19Cb()
const Div20Props = useStore((state)=>state["Shop"]["Div20"]);
const Div20IoProps = useIoStore((state)=>state["Shop"]["Div20"]);
const Div20Cb = useDiv20Cb()
const Div27Props = useStore((state)=>state["Shop"]["Div27"]);
const Div27IoProps = useIoStore((state)=>state["Shop"]["Div27"]);
const Div27Cb = useDiv27Cb()
const Flex84Props = useStore((state)=>state["Shop"]["Flex84"]);
const Flex84IoProps = useIoStore((state)=>state["Shop"]["Flex84"]);
const Flex84Cb = useFlex84Cb()
const Div32Props = useStore((state)=>state["Shop"]["Div32"]);
const Div32IoProps = useIoStore((state)=>state["Shop"]["Div32"]);
const Div32Cb = useDiv32Cb()
const Div33Props = useStore((state)=>state["Shop"]["Div33"]);
const Div33IoProps = useIoStore((state)=>state["Shop"]["Div33"]);
const Div33Cb = useDiv33Cb()
const Div34Props = useStore((state)=>state["Shop"]["Div34"]);
const Div34IoProps = useIoStore((state)=>state["Shop"]["Div34"]);
const Div34Cb = useDiv34Cb()
const Div35Props = useStore((state)=>state["Shop"]["Div35"]);
const Div35IoProps = useIoStore((state)=>state["Shop"]["Div35"]);
const Div35Cb = useDiv35Cb()
const Flex88Props = useStore((state)=>state["Shop"]["Flex88"]);
const Flex88IoProps = useIoStore((state)=>state["Shop"]["Flex88"]);
const Flex88Cb = useFlex88Cb()
const Flex85Props = useStore((state)=>state["Shop"]["Flex85"]);
const Flex85IoProps = useIoStore((state)=>state["Shop"]["Flex85"]);
const Flex85Cb = useFlex85Cb()
const Flex86Props = useStore((state)=>state["Shop"]["Flex86"]);
const Flex86IoProps = useIoStore((state)=>state["Shop"]["Flex86"]);
const Flex86Cb = useFlex86Cb()
const Flex87Props = useStore((state)=>state["Shop"]["Flex87"]);
const Flex87IoProps = useIoStore((state)=>state["Shop"]["Flex87"]);
const Flex87Cb = useFlex87Cb()
const Flex92Props = useStore((state)=>state["Shop"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Shop"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Image81Props = useStore((state)=>state["Shop"]["Image81"]);
const Image81IoProps = useIoStore((state)=>state["Shop"]["Image81"]);
const Image81Cb = useImage81Cb()
const Image82Props = useStore((state)=>state["Shop"]["Image82"]);
const Image82IoProps = useIoStore((state)=>state["Shop"]["Image82"]);
const Image82Cb = useImage82Cb()
const Image83Props = useStore((state)=>state["Shop"]["Image83"]);
const Image83IoProps = useIoStore((state)=>state["Shop"]["Image83"]);
const Image83Cb = useImage83Cb()
const Input13Props = useStore((state)=>state["Shop"]["Input13"]);
const Input13IoProps = useIoStore((state)=>state["Shop"]["Input13"]);
const Input13Cb = useInput13Cb()
const Link53Props = useStore((state)=>state["Shop"]["Link53"]);
const Link53IoProps = useIoStore((state)=>state["Shop"]["Link53"]);
const Link53Cb = useLink53Cb()
const Link54Props = useStore((state)=>state["Shop"]["Link54"]);
const Link54IoProps = useIoStore((state)=>state["Shop"]["Link54"]);
const Link54Cb = useLink54Cb()
const Link55Props = useStore((state)=>state["Shop"]["Link55"]);
const Link55IoProps = useIoStore((state)=>state["Shop"]["Link55"]);
const Link55Cb = useLink55Cb()
const Link56Props = useStore((state)=>state["Shop"]["Link56"]);
const Link56IoProps = useIoStore((state)=>state["Shop"]["Link56"]);
const Link56Cb = useLink56Cb()
const Link57Props = useStore((state)=>state["Shop"]["Link57"]);
const Link57IoProps = useIoStore((state)=>state["Shop"]["Link57"]);
const Link57Cb = useLink57Cb()
const TextBox112Props = useStore((state)=>state["Shop"]["TextBox112"]);
const TextBox112IoProps = useIoStore((state)=>state["Shop"]["TextBox112"]);
const TextBox112Cb = useTextBox112Cb()
const Image84Props = useStore((state)=>state["Shop"]["Image84"]);
const Image84IoProps = useIoStore((state)=>state["Shop"]["Image84"]);
const Image84Cb = useImage84Cb()
const TextBox113Props = useStore((state)=>state["Shop"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Shop"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Shop"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Shop"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const Button7Props = useStore((state)=>state["Shop"]["Button7"]);
const Button7IoProps = useIoStore((state)=>state["Shop"]["Button7"]);
const Button7Cb = useButton7Cb()
const TextBox115Props = useStore((state)=>state["Shop"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Shop"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const Image85Props = useStore((state)=>state["Shop"]["Image85"]);
const Image85IoProps = useIoStore((state)=>state["Shop"]["Image85"]);
const Image85Cb = useImage85Cb()
const Button8Props = useStore((state)=>state["Shop"]["Button8"]);
const Button8IoProps = useIoStore((state)=>state["Shop"]["Button8"]);
const Button8Cb = useButton8Cb()
const TextBox117Props = useStore((state)=>state["Shop"]["TextBox117"]);
const TextBox117IoProps = useIoStore((state)=>state["Shop"]["TextBox117"]);
const TextBox117Cb = useTextBox117Cb()
const Image86Props = useStore((state)=>state["Shop"]["Image86"]);
const Image86IoProps = useIoStore((state)=>state["Shop"]["Image86"]);
const Image86Cb = useImage86Cb()
const TextBox139Props = useStore((state)=>state["Shop"]["TextBox139"]);
const TextBox139IoProps = useIoStore((state)=>state["Shop"]["TextBox139"]);
const TextBox139Cb = useTextBox139Cb()
const TextBox118Props = useStore((state)=>state["Shop"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Shop"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const Button9Props = useStore((state)=>state["Shop"]["Button9"]);
const Button9IoProps = useIoStore((state)=>state["Shop"]["Button9"]);
const Button9Cb = useButton9Cb()
const TextBox119Props = useStore((state)=>state["Shop"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Shop"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()
const Image87Props = useStore((state)=>state["Shop"]["Image87"]);
const Image87IoProps = useIoStore((state)=>state["Shop"]["Image87"]);
const Image87Cb = useImage87Cb()
const TextBox116Props = useStore((state)=>state["Shop"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Shop"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox130Props = useStore((state)=>state["Shop"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Shop"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const Image93Props = useStore((state)=>state["Shop"]["Image93"]);
const Image93IoProps = useIoStore((state)=>state["Shop"]["Image93"]);
const Image93Cb = useImage93Cb()
const Button18Props = useStore((state)=>state["Shop"]["Button18"]);
const Button18IoProps = useIoStore((state)=>state["Shop"]["Button18"]);
const Button18Cb = useButton18Cb()
const Button19Props = useStore((state)=>state["Shop"]["Button19"]);
const Button19IoProps = useIoStore((state)=>state["Shop"]["Button19"]);
const Button19Cb = useButton19Cb()
const Image98Props = useStore((state)=>state["Shop"]["Image98"]);
const Image98IoProps = useIoStore((state)=>state["Shop"]["Image98"]);
const Image98Cb = useImage98Cb()
const TextBox140Props = useStore((state)=>state["Shop"]["TextBox140"]);
const TextBox140IoProps = useIoStore((state)=>state["Shop"]["TextBox140"]);
const TextBox140Cb = useTextBox140Cb()
const TextBox141Props = useStore((state)=>state["Shop"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Shop"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const Image99Props = useStore((state)=>state["Shop"]["Image99"]);
const Image99IoProps = useIoStore((state)=>state["Shop"]["Image99"]);
const Image99Cb = useImage99Cb()
const TextBox142Props = useStore((state)=>state["Shop"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Shop"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const Button20Props = useStore((state)=>state["Shop"]["Button20"]);
const Button20IoProps = useIoStore((state)=>state["Shop"]["Button20"]);
const Button20Cb = useButton20Cb()
const TextBox143Props = useStore((state)=>state["Shop"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Shop"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox144Props = useStore((state)=>state["Shop"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Shop"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const Image100Props = useStore((state)=>state["Shop"]["Image100"]);
const Image100IoProps = useIoStore((state)=>state["Shop"]["Image100"]);
const Image100Cb = useImage100Cb()
const TextBox145Props = useStore((state)=>state["Shop"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Shop"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const Button21Props = useStore((state)=>state["Shop"]["Button21"]);
const Button21IoProps = useIoStore((state)=>state["Shop"]["Button21"]);
const Button21Cb = useButton21Cb()
const Image101Props = useStore((state)=>state["Shop"]["Image101"]);
const Image101IoProps = useIoStore((state)=>state["Shop"]["Image101"]);
const Image101Cb = useImage101Cb()
const TextBox146Props = useStore((state)=>state["Shop"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Shop"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()
const Button22Props = useStore((state)=>state["Shop"]["Button22"]);
const Button22IoProps = useIoStore((state)=>state["Shop"]["Button22"]);
const Button22Cb = useButton22Cb()
const TextBox147Props = useStore((state)=>state["Shop"]["TextBox147"]);
const TextBox147IoProps = useIoStore((state)=>state["Shop"]["TextBox147"]);
const TextBox147Cb = useTextBox147Cb()
const TextBox148Props = useStore((state)=>state["Shop"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Shop"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const Link58Props = useStore((state)=>state["Shop"]["Link58"]);
const Link58IoProps = useIoStore((state)=>state["Shop"]["Link58"]);
const Link58Cb = useLink58Cb()
const Link59Props = useStore((state)=>state["Shop"]["Link59"]);
const Link59IoProps = useIoStore((state)=>state["Shop"]["Link59"]);
const Link59Cb = useLink59Cb()
const Link60Props = useStore((state)=>state["Shop"]["Link60"]);
const Link60IoProps = useIoStore((state)=>state["Shop"]["Link60"]);
const Link60Cb = useLink60Cb()
const Link61Props = useStore((state)=>state["Shop"]["Link61"]);
const Link61IoProps = useIoStore((state)=>state["Shop"]["Link61"]);
const Link61Cb = useLink61Cb()
const TextBox149Props = useStore((state)=>state["Shop"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Shop"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Shop"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Shop"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()
const Image102Props = useStore((state)=>state["Shop"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["Shop"]["Image102"]);
const Image102Cb = useImage102Cb()
const Image103Props = useStore((state)=>state["Shop"]["Image103"]);
const Image103IoProps = useIoStore((state)=>state["Shop"]["Image103"]);
const Image103Cb = useImage103Cb()
const TextBox151Props = useStore((state)=>state["Shop"]["TextBox151"]);
const TextBox151IoProps = useIoStore((state)=>state["Shop"]["TextBox151"]);
const TextBox151Cb = useTextBox151Cb()
const Image104Props = useStore((state)=>state["Shop"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["Shop"]["Image104"]);
const Image104Cb = useImage104Cb()
const TextBox152Props = useStore((state)=>state["Shop"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["Shop"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()
const TextBox153Props = useStore((state)=>state["Shop"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Shop"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const Image105Props = useStore((state)=>state["Shop"]["Image105"]);
const Image105IoProps = useIoStore((state)=>state["Shop"]["Image105"]);
const Image105Cb = useImage105Cb()
const TextBox154Props = useStore((state)=>state["Shop"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Shop"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const Image106Props = useStore((state)=>state["Shop"]["Image106"]);
const Image106IoProps = useIoStore((state)=>state["Shop"]["Image106"]);
const Image106Cb = useImage106Cb()
const TextBox155Props = useStore((state)=>state["Shop"]["TextBox155"]);
const TextBox155IoProps = useIoStore((state)=>state["Shop"]["TextBox155"]);
const TextBox155Cb = useTextBox155Cb()
const Image107Props = useStore((state)=>state["Shop"]["Image107"]);
const Image107IoProps = useIoStore((state)=>state["Shop"]["Image107"]);
const Image107Cb = useImage107Cb()
const TextBox156Props = useStore((state)=>state["Shop"]["TextBox156"]);
const TextBox156IoProps = useIoStore((state)=>state["Shop"]["TextBox156"]);
const TextBox156Cb = useTextBox156Cb()
const TextBox160Props = useStore((state)=>state["Shop"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Shop"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()

  return (<>
  <Flex2 className="p-Shop Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Flex2 className="p-Shop Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Image2 className="p-Shop Image84 bpt" {...Image84Props} {...Image84Cb} {...Image84IoProps}/>
<TextBox2 className="p-Shop TextBox112 bpt" {...TextBox112Props} {...TextBox112Cb} {...TextBox112IoProps}/>
</Flex2>
<Flex2 className="p-Shop Flex77 bpt" {...Flex77Props} {...Flex77Cb} {...Flex77IoProps}>
<Link2 className="p-Shop Link57 bpt" {...Link57Props} {...Link57Cb} {...Link57IoProps}/>
<Link2 className="p-Shop Link56 bpt" {...Link56Props} {...Link56Cb} {...Link56IoProps}/>
<Link2 className="p-Shop Link55 bpt" {...Link55Props} {...Link55Cb} {...Link55IoProps}/>
<Link2 className="p-Shop Link54 bpt" {...Link54Props} {...Link54Cb} {...Link54IoProps}/>
<Link2 className="p-Shop Link53 bpt" {...Link53Props} {...Link53Cb} {...Link53IoProps}/>
</Flex2>
<Flex2 className="p-Shop Flex76 bpt" {...Flex76Props} {...Flex76Cb} {...Flex76IoProps}>
<Image2 className="p-Shop Image83 bpt" {...Image83Props} {...Image83Cb} {...Image83IoProps}/>
<Image2 className="p-Shop Image82 bpt" {...Image82Props} {...Image82Cb} {...Image82IoProps}/>
<Image2 className="p-Shop Image81 bpt" {...Image81Props} {...Image81Cb} {...Image81IoProps}/>
<Input2 className="p-Shop Input13 bpt" {...Input13Props} {...Input13Cb} {...Input13IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Shop Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<TextBox2 className="p-Shop TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
</Flex2>
<Flex2 className="p-Shop Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<Div2 className="p-Shop Div19 bpt" {...Div19Props} {...Div19Cb} {...Div19IoProps}>
<TextBox2 className="p-Shop TextBox117 bpt" {...TextBox117Props} {...TextBox117Cb} {...TextBox117IoProps}/>
<Image2 className="p-Shop Image86 bpt" {...Image86Props} {...Image86Cb} {...Image86IoProps}/>
<TextBox2 className="p-Shop TextBox139 bpt" {...TextBox139Props} {...TextBox139Cb} {...TextBox139IoProps}/>
<Button1 className="p-Shop Button8 bpt" {...Button8Props} {...Button8Cb} {...Button8IoProps}/>
</Div2>
<Div2 className="p-Shop Div18 bpt" {...Div18Props} {...Div18Cb} {...Div18IoProps}>
<TextBox2 className="p-Shop TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<Image2 className="p-Shop Image85 bpt" {...Image85Props} {...Image85Cb} {...Image85IoProps}/>
<TextBox2 className="p-Shop TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Button1 className="p-Shop Button7 bpt" {...Button7Props} {...Button7Cb} {...Button7IoProps}/>
</Div2>
<Div2 className="p-Shop Div20 bpt" {...Div20Props} {...Div20Cb} {...Div20IoProps}>
<TextBox2 className="p-Shop TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<Image2 className="p-Shop Image87 bpt" {...Image87Props} {...Image87Cb} {...Image87IoProps}/>
<TextBox2 className="p-Shop TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<Button1 className="p-Shop Button9 bpt" {...Button9Props} {...Button9Cb} {...Button9IoProps}/>
</Div2>
<Div2 className="p-Shop Div27 bpt" {...Div27Props} {...Div27Cb} {...Div27IoProps}>
<TextBox2 className="p-Shop TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
<Image2 className="p-Shop Image93 bpt" {...Image93Props} {...Image93Cb} {...Image93IoProps}/>
<TextBox2 className="p-Shop TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
<Button1 className="p-Shop Button18 bpt" {...Button18Props} {...Button18Cb} {...Button18IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-Shop Flex84 bpt" {...Flex84Props} {...Flex84Cb} {...Flex84IoProps}>
<Div2 className="p-Shop Div34 bpt" {...Div34Props} {...Div34Cb} {...Div34IoProps}>
<TextBox2 className="p-Shop TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
<Image2 className="p-Shop Image100 bpt" {...Image100Props} {...Image100Cb} {...Image100IoProps}/>
<TextBox2 className="p-Shop TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<Button1 className="p-Shop Button21 bpt" {...Button21Props} {...Button21Cb} {...Button21IoProps}/>
</Div2>
<Div2 className="p-Shop Div35 bpt" {...Div35Props} {...Div35Cb} {...Div35IoProps}>
<TextBox2 className="p-Shop TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
<Image2 className="p-Shop Image101 bpt" {...Image101Props} {...Image101Cb} {...Image101IoProps}/>
<TextBox2 className="p-Shop TextBox147 bpt" {...TextBox147Props} {...TextBox147Cb} {...TextBox147IoProps}/>
<Button1 className="p-Shop Button22 bpt" {...Button22Props} {...Button22Cb} {...Button22IoProps}/>
</Div2>
<Div2 className="p-Shop Div33 bpt" {...Div33Props} {...Div33Cb} {...Div33IoProps}>
<TextBox2 className="p-Shop TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
<Image2 className="p-Shop Image99 bpt" {...Image99Props} {...Image99Cb} {...Image99IoProps}/>
<TextBox2 className="p-Shop TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
<Button1 className="p-Shop Button20 bpt" {...Button20Props} {...Button20Cb} {...Button20IoProps}/>
</Div2>
<Div2 className="p-Shop Div32 bpt" {...Div32Props} {...Div32Cb} {...Div32IoProps}>
<TextBox2 className="p-Shop TextBox140 bpt" {...TextBox140Props} {...TextBox140Cb} {...TextBox140IoProps}/>
<Image2 className="p-Shop Image98 bpt" {...Image98Props} {...Image98Cb} {...Image98IoProps}/>
<TextBox2 className="p-Shop TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<Button1 className="p-Shop Button19 bpt" {...Button19Props} {...Button19Cb} {...Button19IoProps}/>
</Div2>
</Flex2>
<Flex2 className="p-Shop Flex88 bpt" {...Flex88Props} {...Flex88Cb} {...Flex88IoProps}>
<Flex2 className="p-Shop Flex85 bpt" {...Flex85Props} {...Flex85Cb} {...Flex85IoProps}>
<TextBox2 className="p-Shop TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
<Link2 className="p-Shop Link58 bpt" {...Link58Props} {...Link58Cb} {...Link58IoProps}/>
<Link2 className="p-Shop Link59 bpt" {...Link59Props} {...Link59Cb} {...Link59IoProps}/>
<Link2 className="p-Shop Link60 bpt" {...Link60Props} {...Link60Cb} {...Link60IoProps}/>
<Link2 className="p-Shop Link61 bpt" {...Link61Props} {...Link61Cb} {...Link61IoProps}/>
</Flex2>
<Flex2 className="p-Shop Flex86 bpt" {...Flex86Props} {...Flex86Cb} {...Flex86IoProps}>
<TextBox2 className="p-Shop TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<Image2 className="p-Shop Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
<TextBox2 className="p-Shop TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
<Image2 className="p-Shop Image103 bpt" {...Image103Props} {...Image103Cb} {...Image103IoProps}/>
<TextBox2 className="p-Shop TextBox151 bpt" {...TextBox151Props} {...TextBox151Cb} {...TextBox151IoProps}/>
<Image2 className="p-Shop Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
<TextBox2 className="p-Shop TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
</Flex2>
<Flex2 className="p-Shop Flex87 bpt" {...Flex87Props} {...Flex87Cb} {...Flex87IoProps}>
<TextBox2 className="p-Shop TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<Image2 className="p-Shop Image105 bpt" {...Image105Props} {...Image105Cb} {...Image105IoProps}/>
<TextBox2 className="p-Shop TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
<Image2 className="p-Shop Image106 bpt" {...Image106Props} {...Image106Cb} {...Image106IoProps}/>
<TextBox2 className="p-Shop TextBox155 bpt" {...TextBox155Props} {...TextBox155Cb} {...TextBox155IoProps}/>
<Image2 className="p-Shop Image107 bpt" {...Image107Props} {...Image107Cb} {...Image107IoProps}/>
<TextBox2 className="p-Shop TextBox156 bpt" {...TextBox156Props} {...TextBox156Cb} {...TextBox156IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Shop Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<TextBox2 className="p-Shop TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex2>
  </>);
}
