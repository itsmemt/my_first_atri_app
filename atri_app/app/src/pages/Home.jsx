import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { Input } from "@atrilabs/react-component-manifests/src/manifests/Input/Input.tsx";
import { useMain_ContainerCb, useHeaderCb, useNav_ItemsCb, useLogo_textCb, useNav_linksCb, useImg_containerCb, useText_containerCb, useBuid_textCb, usesub_heading_textCb, useOpen_source_textCb, useInfo_SectionCb, useDescription_textCb, useCard1Cb, useFeature1_textCb, useFeature1_imgCb, usecard3Cb, usefeature3_textCb, usefeature3_imgCb, useCard2Cb, usefeature2_textCb, usefeature2_imgCb, useInstallation_guideCb, useFooterCb, useFooter_TextsCb, useSocial_ContainerCb, useFlex44Cb, useFlex45Cb, useLinks_ContainerCb, useFlex40Cb, useFlex41Cb, useFlex42Cb, useFlex43Cb, useCopyrightCb, useLeft_conCb, useRight_ConCb, useFormCb, useForm_textCb, useForm_elemCb, useFixed_ComponentCb, useLink4Cb, useLink1Cb, uselink2Cb, useLink3Cb, useLogoTextCb, uselogo_imgCb, useNav_btnCb, useNav_githubCb, useAtri_gifCb, useBold_DescCb, useReg_descCb, useGithub_link_imgCb, useOPEN_SOURCE_txtCb, usesemi_bold_textCb, useTextBox12Cb, useTextBox1Cb, useTextBox2Cb, useTextBox3Cb, usefeature_1Cb, usef3_text1Cb, usef3_text2Cb, usef3_text3Cb, usef3_imgCb, usef2_text1Cb, usef2_text2Cb, usef2_text3Cb, usef2_imgCb, useInstall_text2Cb, useInstall_text1Cb, useInstall_imgCb, useFooter_descCb, useFooter_logoCb, useFooter_logo_textCb, useFooter_github_imgCb, useLinkedin_iconCb, useSlack_IconCb, useYoutube_IconCb, useTwitter_IconCb, useF11_txtCb, useF12_txtCb, useF13_txtCb, useF14_txtCb, useF21_txtCb, useF22_txtCb, useF23_txtCb, useF24_txtCb, useF31_txtCb, useF32_txtCb, useF33_txtCb, useF41_txtCb, useF42_txtCb, useCopyright_textCb, usePrivacy_PolicyCb, useTerms_of_UseCb, useSub_text1Cb, useSub_Text2Cb, useForm_buttonCb, useForm_inputCb, useMade_With_Atri_logoCb } from "../page-cbs/Home";
import "../page-css/Home.css";
import "../custom/Home";

export default function Home() {
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

  const Main_ContainerProps = useStore((state)=>state["Home"]["Main_Container"]);
const Main_ContainerIoProps = useIoStore((state)=>state["Home"]["Main_Container"]);
const Main_ContainerCb = useMain_ContainerCb()
const HeaderProps = useStore((state)=>state["Home"]["Header"]);
const HeaderIoProps = useIoStore((state)=>state["Home"]["Header"]);
const HeaderCb = useHeaderCb()
const Nav_ItemsProps = useStore((state)=>state["Home"]["Nav_Items"]);
const Nav_ItemsIoProps = useIoStore((state)=>state["Home"]["Nav_Items"]);
const Nav_ItemsCb = useNav_ItemsCb()
const Logo_textProps = useStore((state)=>state["Home"]["Logo_text"]);
const Logo_textIoProps = useIoStore((state)=>state["Home"]["Logo_text"]);
const Logo_textCb = useLogo_textCb()
const Nav_linksProps = useStore((state)=>state["Home"]["Nav_links"]);
const Nav_linksIoProps = useIoStore((state)=>state["Home"]["Nav_links"]);
const Nav_linksCb = useNav_linksCb()
const Img_containerProps = useStore((state)=>state["Home"]["Img_container"]);
const Img_containerIoProps = useIoStore((state)=>state["Home"]["Img_container"]);
const Img_containerCb = useImg_containerCb()
const Text_containerProps = useStore((state)=>state["Home"]["Text_container"]);
const Text_containerIoProps = useIoStore((state)=>state["Home"]["Text_container"]);
const Text_containerCb = useText_containerCb()
const Buid_textProps = useStore((state)=>state["Home"]["Buid_text"]);
const Buid_textIoProps = useIoStore((state)=>state["Home"]["Buid_text"]);
const Buid_textCb = useBuid_textCb()
const sub_heading_textProps = useStore((state)=>state["Home"]["sub_heading_text"]);
const sub_heading_textIoProps = useIoStore((state)=>state["Home"]["sub_heading_text"]);
const sub_heading_textCb = usesub_heading_textCb()
const Open_source_textProps = useStore((state)=>state["Home"]["Open_source_text"]);
const Open_source_textIoProps = useIoStore((state)=>state["Home"]["Open_source_text"]);
const Open_source_textCb = useOpen_source_textCb()
const Info_SectionProps = useStore((state)=>state["Home"]["Info_Section"]);
const Info_SectionIoProps = useIoStore((state)=>state["Home"]["Info_Section"]);
const Info_SectionCb = useInfo_SectionCb()
const Description_textProps = useStore((state)=>state["Home"]["Description_text"]);
const Description_textIoProps = useIoStore((state)=>state["Home"]["Description_text"]);
const Description_textCb = useDescription_textCb()
const Card1Props = useStore((state)=>state["Home"]["Card1"]);
const Card1IoProps = useIoStore((state)=>state["Home"]["Card1"]);
const Card1Cb = useCard1Cb()
const Feature1_textProps = useStore((state)=>state["Home"]["Feature1_text"]);
const Feature1_textIoProps = useIoStore((state)=>state["Home"]["Feature1_text"]);
const Feature1_textCb = useFeature1_textCb()
const Feature1_imgProps = useStore((state)=>state["Home"]["Feature1_img"]);
const Feature1_imgIoProps = useIoStore((state)=>state["Home"]["Feature1_img"]);
const Feature1_imgCb = useFeature1_imgCb()
const card3Props = useStore((state)=>state["Home"]["card3"]);
const card3IoProps = useIoStore((state)=>state["Home"]["card3"]);
const card3Cb = usecard3Cb()
const feature3_textProps = useStore((state)=>state["Home"]["feature3_text"]);
const feature3_textIoProps = useIoStore((state)=>state["Home"]["feature3_text"]);
const feature3_textCb = usefeature3_textCb()
const feature3_imgProps = useStore((state)=>state["Home"]["feature3_img"]);
const feature3_imgIoProps = useIoStore((state)=>state["Home"]["feature3_img"]);
const feature3_imgCb = usefeature3_imgCb()
const Card2Props = useStore((state)=>state["Home"]["Card2"]);
const Card2IoProps = useIoStore((state)=>state["Home"]["Card2"]);
const Card2Cb = useCard2Cb()
const feature2_textProps = useStore((state)=>state["Home"]["feature2_text"]);
const feature2_textIoProps = useIoStore((state)=>state["Home"]["feature2_text"]);
const feature2_textCb = usefeature2_textCb()
const feature2_imgProps = useStore((state)=>state["Home"]["feature2_img"]);
const feature2_imgIoProps = useIoStore((state)=>state["Home"]["feature2_img"]);
const feature2_imgCb = usefeature2_imgCb()
const Installation_guideProps = useStore((state)=>state["Home"]["Installation_guide"]);
const Installation_guideIoProps = useIoStore((state)=>state["Home"]["Installation_guide"]);
const Installation_guideCb = useInstallation_guideCb()
const FooterProps = useStore((state)=>state["Home"]["Footer"]);
const FooterIoProps = useIoStore((state)=>state["Home"]["Footer"]);
const FooterCb = useFooterCb()
const Footer_TextsProps = useStore((state)=>state["Home"]["Footer_Texts"]);
const Footer_TextsIoProps = useIoStore((state)=>state["Home"]["Footer_Texts"]);
const Footer_TextsCb = useFooter_TextsCb()
const Social_ContainerProps = useStore((state)=>state["Home"]["Social_Container"]);
const Social_ContainerIoProps = useIoStore((state)=>state["Home"]["Social_Container"]);
const Social_ContainerCb = useSocial_ContainerCb()
const Flex44Props = useStore((state)=>state["Home"]["Flex44"]);
const Flex44IoProps = useIoStore((state)=>state["Home"]["Flex44"]);
const Flex44Cb = useFlex44Cb()
const Flex45Props = useStore((state)=>state["Home"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Home"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Links_ContainerProps = useStore((state)=>state["Home"]["Links_Container"]);
const Links_ContainerIoProps = useIoStore((state)=>state["Home"]["Links_Container"]);
const Links_ContainerCb = useLinks_ContainerCb()
const Flex40Props = useStore((state)=>state["Home"]["Flex40"]);
const Flex40IoProps = useIoStore((state)=>state["Home"]["Flex40"]);
const Flex40Cb = useFlex40Cb()
const Flex41Props = useStore((state)=>state["Home"]["Flex41"]);
const Flex41IoProps = useIoStore((state)=>state["Home"]["Flex41"]);
const Flex41Cb = useFlex41Cb()
const Flex42Props = useStore((state)=>state["Home"]["Flex42"]);
const Flex42IoProps = useIoStore((state)=>state["Home"]["Flex42"]);
const Flex42Cb = useFlex42Cb()
const Flex43Props = useStore((state)=>state["Home"]["Flex43"]);
const Flex43IoProps = useIoStore((state)=>state["Home"]["Flex43"]);
const Flex43Cb = useFlex43Cb()
const CopyrightProps = useStore((state)=>state["Home"]["Copyright"]);
const CopyrightIoProps = useIoStore((state)=>state["Home"]["Copyright"]);
const CopyrightCb = useCopyrightCb()
const Left_conProps = useStore((state)=>state["Home"]["Left_con"]);
const Left_conIoProps = useIoStore((state)=>state["Home"]["Left_con"]);
const Left_conCb = useLeft_conCb()
const Right_ConProps = useStore((state)=>state["Home"]["Right_Con"]);
const Right_ConIoProps = useIoStore((state)=>state["Home"]["Right_Con"]);
const Right_ConCb = useRight_ConCb()
const FormProps = useStore((state)=>state["Home"]["Form"]);
const FormIoProps = useIoStore((state)=>state["Home"]["Form"]);
const FormCb = useFormCb()
const Form_textProps = useStore((state)=>state["Home"]["Form_text"]);
const Form_textIoProps = useIoStore((state)=>state["Home"]["Form_text"]);
const Form_textCb = useForm_textCb()
const Form_elemProps = useStore((state)=>state["Home"]["Form_elem"]);
const Form_elemIoProps = useIoStore((state)=>state["Home"]["Form_elem"]);
const Form_elemCb = useForm_elemCb()
const Fixed_ComponentProps = useStore((state)=>state["Home"]["Fixed_Component"]);
const Fixed_ComponentIoProps = useIoStore((state)=>state["Home"]["Fixed_Component"]);
const Fixed_ComponentCb = useFixed_ComponentCb()
const Link4Props = useStore((state)=>state["Home"]["Link4"]);
const Link4IoProps = useIoStore((state)=>state["Home"]["Link4"]);
const Link4Cb = useLink4Cb()
const Link1Props = useStore((state)=>state["Home"]["Link1"]);
const Link1IoProps = useIoStore((state)=>state["Home"]["Link1"]);
const Link1Cb = useLink1Cb()
const link2Props = useStore((state)=>state["Home"]["link2"]);
const link2IoProps = useIoStore((state)=>state["Home"]["link2"]);
const link2Cb = uselink2Cb()
const Link3Props = useStore((state)=>state["Home"]["Link3"]);
const Link3IoProps = useIoStore((state)=>state["Home"]["Link3"]);
const Link3Cb = useLink3Cb()
const LogoTextProps = useStore((state)=>state["Home"]["LogoText"]);
const LogoTextIoProps = useIoStore((state)=>state["Home"]["LogoText"]);
const LogoTextCb = useLogoTextCb()
const logo_imgProps = useStore((state)=>state["Home"]["logo_img"]);
const logo_imgIoProps = useIoStore((state)=>state["Home"]["logo_img"]);
const logo_imgCb = uselogo_imgCb()
const Nav_btnProps = useStore((state)=>state["Home"]["Nav_btn"]);
const Nav_btnIoProps = useIoStore((state)=>state["Home"]["Nav_btn"]);
const Nav_btnCb = useNav_btnCb()
const Nav_githubProps = useStore((state)=>state["Home"]["Nav_github"]);
const Nav_githubIoProps = useIoStore((state)=>state["Home"]["Nav_github"]);
const Nav_githubCb = useNav_githubCb()
const Atri_gifProps = useStore((state)=>state["Home"]["Atri_gif"]);
const Atri_gifIoProps = useIoStore((state)=>state["Home"]["Atri_gif"]);
const Atri_gifCb = useAtri_gifCb()
const Bold_DescProps = useStore((state)=>state["Home"]["Bold_Desc"]);
const Bold_DescIoProps = useIoStore((state)=>state["Home"]["Bold_Desc"]);
const Bold_DescCb = useBold_DescCb()
const Reg_descProps = useStore((state)=>state["Home"]["Reg_desc"]);
const Reg_descIoProps = useIoStore((state)=>state["Home"]["Reg_desc"]);
const Reg_descCb = useReg_descCb()
const Github_link_imgProps = useStore((state)=>state["Home"]["Github_link_img"]);
const Github_link_imgIoProps = useIoStore((state)=>state["Home"]["Github_link_img"]);
const Github_link_imgCb = useGithub_link_imgCb()
const OPEN_SOURCE_txtProps = useStore((state)=>state["Home"]["OPEN_SOURCE_txt"]);
const OPEN_SOURCE_txtIoProps = useIoStore((state)=>state["Home"]["OPEN_SOURCE_txt"]);
const OPEN_SOURCE_txtCb = useOPEN_SOURCE_txtCb()
const semi_bold_textProps = useStore((state)=>state["Home"]["semi_bold_text"]);
const semi_bold_textIoProps = useIoStore((state)=>state["Home"]["semi_bold_text"]);
const semi_bold_textCb = usesemi_bold_textCb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const TextBox1Props = useStore((state)=>state["Home"]["TextBox1"]);
const TextBox1IoProps = useIoStore((state)=>state["Home"]["TextBox1"]);
const TextBox1Cb = useTextBox1Cb()
const TextBox2Props = useStore((state)=>state["Home"]["TextBox2"]);
const TextBox2IoProps = useIoStore((state)=>state["Home"]["TextBox2"]);
const TextBox2Cb = useTextBox2Cb()
const TextBox3Props = useStore((state)=>state["Home"]["TextBox3"]);
const TextBox3IoProps = useIoStore((state)=>state["Home"]["TextBox3"]);
const TextBox3Cb = useTextBox3Cb()
const feature_1Props = useStore((state)=>state["Home"]["feature_1"]);
const feature_1IoProps = useIoStore((state)=>state["Home"]["feature_1"]);
const feature_1Cb = usefeature_1Cb()
const f3_text1Props = useStore((state)=>state["Home"]["f3_text1"]);
const f3_text1IoProps = useIoStore((state)=>state["Home"]["f3_text1"]);
const f3_text1Cb = usef3_text1Cb()
const f3_text2Props = useStore((state)=>state["Home"]["f3_text2"]);
const f3_text2IoProps = useIoStore((state)=>state["Home"]["f3_text2"]);
const f3_text2Cb = usef3_text2Cb()
const f3_text3Props = useStore((state)=>state["Home"]["f3_text3"]);
const f3_text3IoProps = useIoStore((state)=>state["Home"]["f3_text3"]);
const f3_text3Cb = usef3_text3Cb()
const f3_imgProps = useStore((state)=>state["Home"]["f3_img"]);
const f3_imgIoProps = useIoStore((state)=>state["Home"]["f3_img"]);
const f3_imgCb = usef3_imgCb()
const f2_text1Props = useStore((state)=>state["Home"]["f2_text1"]);
const f2_text1IoProps = useIoStore((state)=>state["Home"]["f2_text1"]);
const f2_text1Cb = usef2_text1Cb()
const f2_text2Props = useStore((state)=>state["Home"]["f2_text2"]);
const f2_text2IoProps = useIoStore((state)=>state["Home"]["f2_text2"]);
const f2_text2Cb = usef2_text2Cb()
const f2_text3Props = useStore((state)=>state["Home"]["f2_text3"]);
const f2_text3IoProps = useIoStore((state)=>state["Home"]["f2_text3"]);
const f2_text3Cb = usef2_text3Cb()
const f2_imgProps = useStore((state)=>state["Home"]["f2_img"]);
const f2_imgIoProps = useIoStore((state)=>state["Home"]["f2_img"]);
const f2_imgCb = usef2_imgCb()
const Install_text2Props = useStore((state)=>state["Home"]["Install_text2"]);
const Install_text2IoProps = useIoStore((state)=>state["Home"]["Install_text2"]);
const Install_text2Cb = useInstall_text2Cb()
const Install_text1Props = useStore((state)=>state["Home"]["Install_text1"]);
const Install_text1IoProps = useIoStore((state)=>state["Home"]["Install_text1"]);
const Install_text1Cb = useInstall_text1Cb()
const Install_imgProps = useStore((state)=>state["Home"]["Install_img"]);
const Install_imgIoProps = useIoStore((state)=>state["Home"]["Install_img"]);
const Install_imgCb = useInstall_imgCb()
const Footer_descProps = useStore((state)=>state["Home"]["Footer_desc"]);
const Footer_descIoProps = useIoStore((state)=>state["Home"]["Footer_desc"]);
const Footer_descCb = useFooter_descCb()
const Footer_logoProps = useStore((state)=>state["Home"]["Footer_logo"]);
const Footer_logoIoProps = useIoStore((state)=>state["Home"]["Footer_logo"]);
const Footer_logoCb = useFooter_logoCb()
const Footer_logo_textProps = useStore((state)=>state["Home"]["Footer_logo_text"]);
const Footer_logo_textIoProps = useIoStore((state)=>state["Home"]["Footer_logo_text"]);
const Footer_logo_textCb = useFooter_logo_textCb()
const Footer_github_imgProps = useStore((state)=>state["Home"]["Footer_github_img"]);
const Footer_github_imgIoProps = useIoStore((state)=>state["Home"]["Footer_github_img"]);
const Footer_github_imgCb = useFooter_github_imgCb()
const Linkedin_iconProps = useStore((state)=>state["Home"]["Linkedin_icon"]);
const Linkedin_iconIoProps = useIoStore((state)=>state["Home"]["Linkedin_icon"]);
const Linkedin_iconCb = useLinkedin_iconCb()
const Slack_IconProps = useStore((state)=>state["Home"]["Slack_Icon"]);
const Slack_IconIoProps = useIoStore((state)=>state["Home"]["Slack_Icon"]);
const Slack_IconCb = useSlack_IconCb()
const Youtube_IconProps = useStore((state)=>state["Home"]["Youtube_Icon"]);
const Youtube_IconIoProps = useIoStore((state)=>state["Home"]["Youtube_Icon"]);
const Youtube_IconCb = useYoutube_IconCb()
const Twitter_IconProps = useStore((state)=>state["Home"]["Twitter_Icon"]);
const Twitter_IconIoProps = useIoStore((state)=>state["Home"]["Twitter_Icon"]);
const Twitter_IconCb = useTwitter_IconCb()
const F11_txtProps = useStore((state)=>state["Home"]["F11_txt"]);
const F11_txtIoProps = useIoStore((state)=>state["Home"]["F11_txt"]);
const F11_txtCb = useF11_txtCb()
const F12_txtProps = useStore((state)=>state["Home"]["F12_txt"]);
const F12_txtIoProps = useIoStore((state)=>state["Home"]["F12_txt"]);
const F12_txtCb = useF12_txtCb()
const F13_txtProps = useStore((state)=>state["Home"]["F13_txt"]);
const F13_txtIoProps = useIoStore((state)=>state["Home"]["F13_txt"]);
const F13_txtCb = useF13_txtCb()
const F14_txtProps = useStore((state)=>state["Home"]["F14_txt"]);
const F14_txtIoProps = useIoStore((state)=>state["Home"]["F14_txt"]);
const F14_txtCb = useF14_txtCb()
const F21_txtProps = useStore((state)=>state["Home"]["F21_txt"]);
const F21_txtIoProps = useIoStore((state)=>state["Home"]["F21_txt"]);
const F21_txtCb = useF21_txtCb()
const F22_txtProps = useStore((state)=>state["Home"]["F22_txt"]);
const F22_txtIoProps = useIoStore((state)=>state["Home"]["F22_txt"]);
const F22_txtCb = useF22_txtCb()
const F23_txtProps = useStore((state)=>state["Home"]["F23_txt"]);
const F23_txtIoProps = useIoStore((state)=>state["Home"]["F23_txt"]);
const F23_txtCb = useF23_txtCb()
const F24_txtProps = useStore((state)=>state["Home"]["F24_txt"]);
const F24_txtIoProps = useIoStore((state)=>state["Home"]["F24_txt"]);
const F24_txtCb = useF24_txtCb()
const F31_txtProps = useStore((state)=>state["Home"]["F31_txt"]);
const F31_txtIoProps = useIoStore((state)=>state["Home"]["F31_txt"]);
const F31_txtCb = useF31_txtCb()
const F32_txtProps = useStore((state)=>state["Home"]["F32_txt"]);
const F32_txtIoProps = useIoStore((state)=>state["Home"]["F32_txt"]);
const F32_txtCb = useF32_txtCb()
const F33_txtProps = useStore((state)=>state["Home"]["F33_txt"]);
const F33_txtIoProps = useIoStore((state)=>state["Home"]["F33_txt"]);
const F33_txtCb = useF33_txtCb()
const F41_txtProps = useStore((state)=>state["Home"]["F41_txt"]);
const F41_txtIoProps = useIoStore((state)=>state["Home"]["F41_txt"]);
const F41_txtCb = useF41_txtCb()
const F42_txtProps = useStore((state)=>state["Home"]["F42_txt"]);
const F42_txtIoProps = useIoStore((state)=>state["Home"]["F42_txt"]);
const F42_txtCb = useF42_txtCb()
const Copyright_textProps = useStore((state)=>state["Home"]["Copyright_text"]);
const Copyright_textIoProps = useIoStore((state)=>state["Home"]["Copyright_text"]);
const Copyright_textCb = useCopyright_textCb()
const Privacy_PolicyProps = useStore((state)=>state["Home"]["Privacy_Policy"]);
const Privacy_PolicyIoProps = useIoStore((state)=>state["Home"]["Privacy_Policy"]);
const Privacy_PolicyCb = usePrivacy_PolicyCb()
const Terms_of_UseProps = useStore((state)=>state["Home"]["Terms_of_Use"]);
const Terms_of_UseIoProps = useIoStore((state)=>state["Home"]["Terms_of_Use"]);
const Terms_of_UseCb = useTerms_of_UseCb()
const Sub_text1Props = useStore((state)=>state["Home"]["Sub_text1"]);
const Sub_text1IoProps = useIoStore((state)=>state["Home"]["Sub_text1"]);
const Sub_text1Cb = useSub_text1Cb()
const Sub_Text2Props = useStore((state)=>state["Home"]["Sub_Text2"]);
const Sub_Text2IoProps = useIoStore((state)=>state["Home"]["Sub_Text2"]);
const Sub_Text2Cb = useSub_Text2Cb()
const Form_buttonProps = useStore((state)=>state["Home"]["Form_button"]);
const Form_buttonIoProps = useIoStore((state)=>state["Home"]["Form_button"]);
const Form_buttonCb = useForm_buttonCb()
const Form_inputProps = useStore((state)=>state["Home"]["Form_input"]);
const Form_inputIoProps = useIoStore((state)=>state["Home"]["Form_input"]);
const Form_inputCb = useForm_inputCb()
const Made_With_Atri_logoProps = useStore((state)=>state["Home"]["Made_With_Atri_logo"]);
const Made_With_Atri_logoIoProps = useIoStore((state)=>state["Home"]["Made_With_Atri_logo"]);
const Made_With_Atri_logoCb = useMade_With_Atri_logoCb()

  return (<>
  <Div className="p-Home Main_Container bpt" {...Main_ContainerProps} {...Main_ContainerCb} {...Main_ContainerIoProps}>
<Flex className="p-Home Header bpt" {...HeaderProps} {...HeaderCb} {...HeaderIoProps}>
<Flex className="p-Home Logo_text bpt" {...Logo_textProps} {...Logo_textCb} {...Logo_textIoProps}>
<Image className="p-Home logo_img bpt" {...logo_imgProps} {...logo_imgCb} {...logo_imgIoProps}/>
<TextBox className="p-Home LogoText bpt" {...LogoTextProps} {...LogoTextCb} {...LogoTextIoProps}/>
</Flex>
<Flex className="p-Home Nav_Items bpt" {...Nav_ItemsProps} {...Nav_ItemsCb} {...Nav_ItemsIoProps}>
<TextBox className="p-Home Link1 bpt" {...Link1Props} {...Link1Cb} {...Link1IoProps}/>
<TextBox className="p-Home link2 bpt" {...link2Props} {...link2Cb} {...link2IoProps}/>
<TextBox className="p-Home Link3 bpt" {...Link3Props} {...Link3Cb} {...Link3IoProps}/>
<TextBox className="p-Home Link4 bpt" {...Link4Props} {...Link4Cb} {...Link4IoProps}/>
</Flex>
<Flex className="p-Home Nav_links bpt" {...Nav_linksProps} {...Nav_linksCb} {...Nav_linksIoProps}>
<Image className="p-Home Nav_github bpt" {...Nav_githubProps} {...Nav_githubCb} {...Nav_githubIoProps}/>
<Button className="p-Home Nav_btn bpt" {...Nav_btnProps} {...Nav_btnCb} {...Nav_btnIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Text_container bpt" {...Text_containerProps} {...Text_containerCb} {...Text_containerIoProps}>
<Flex className="p-Home Open_source_text bpt" {...Open_source_textProps} {...Open_source_textCb} {...Open_source_textIoProps}>
<TextBox className="p-Home OPEN_SOURCE_txt bpt" {...OPEN_SOURCE_txtProps} {...OPEN_SOURCE_txtCb} {...OPEN_SOURCE_txtIoProps}/>
<Image className="p-Home Github_link_img bpt" {...Github_link_imgProps} {...Github_link_imgCb} {...Github_link_imgIoProps}/>
</Flex>
<Flex className="p-Home Buid_text bpt" {...Buid_textProps} {...Buid_textCb} {...Buid_textIoProps}>
<TextBox className="p-Home Bold_Desc bpt" {...Bold_DescProps} {...Bold_DescCb} {...Bold_DescIoProps}/>
</Flex>
<Flex className="p-Home sub_heading_text bpt" {...sub_heading_textProps} {...sub_heading_textCb} {...sub_heading_textIoProps}>
<TextBox className="p-Home Reg_desc bpt" {...Reg_descProps} {...Reg_descCb} {...Reg_descIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Img_container bpt" {...Img_containerProps} {...Img_containerCb} {...Img_containerIoProps}>
<Image className="p-Home Atri_gif bpt" {...Atri_gifProps} {...Atri_gifCb} {...Atri_gifIoProps}/>
</Flex>
<Flex className="p-Home Info_Section bpt" {...Info_SectionProps} {...Info_SectionCb} {...Info_SectionIoProps}>
<Flex className="p-Home Description_text bpt" {...Description_textProps} {...Description_textCb} {...Description_textIoProps}>
<TextBox className="p-Home semi_bold_text bpt" {...semi_bold_textProps} {...semi_bold_textCb} {...semi_bold_textIoProps}/>
<TextBox className="p-Home TextBox12 bpt" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Flex>
<Flex className="p-Home Card1 bpt" {...Card1Props} {...Card1Cb} {...Card1IoProps}>
<Flex className="p-Home Feature1_text bpt" {...Feature1_textProps} {...Feature1_textCb} {...Feature1_textIoProps}>
<TextBox className="p-Home TextBox1 bpt" {...TextBox1Props} {...TextBox1Cb} {...TextBox1IoProps}/>
<TextBox className="p-Home TextBox2 bpt" {...TextBox2Props} {...TextBox2Cb} {...TextBox2IoProps}/>
<TextBox className="p-Home TextBox3 bpt" {...TextBox3Props} {...TextBox3Cb} {...TextBox3IoProps}/>
</Flex>
<Flex className="p-Home Feature1_img bpt" {...Feature1_imgProps} {...Feature1_imgCb} {...Feature1_imgIoProps}>
<Image className="p-Home feature_1 bpt" {...feature_1Props} {...feature_1Cb} {...feature_1IoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Card2 bpt" {...Card2Props} {...Card2Cb} {...Card2IoProps}>
<Flex className="p-Home feature2_text bpt" {...feature2_textProps} {...feature2_textCb} {...feature2_textIoProps}>
<TextBox className="p-Home f2_text1 bpt" {...f2_text1Props} {...f2_text1Cb} {...f2_text1IoProps}/>
<TextBox className="p-Home f2_text2 bpt" {...f2_text2Props} {...f2_text2Cb} {...f2_text2IoProps}/>
<TextBox className="p-Home f2_text3 bpt" {...f2_text3Props} {...f2_text3Cb} {...f2_text3IoProps}/>
</Flex>
<Flex className="p-Home feature2_img bpt" {...feature2_imgProps} {...feature2_imgCb} {...feature2_imgIoProps}>
<Image className="p-Home f2_img bpt" {...f2_imgProps} {...f2_imgCb} {...f2_imgIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home card3 bpt" {...card3Props} {...card3Cb} {...card3IoProps}>
<Flex className="p-Home feature3_text bpt" {...feature3_textProps} {...feature3_textCb} {...feature3_textIoProps}>
<TextBox className="p-Home f3_text1 bpt" {...f3_text1Props} {...f3_text1Cb} {...f3_text1IoProps}/>
<TextBox className="p-Home f3_text2 bpt" {...f3_text2Props} {...f3_text2Cb} {...f3_text2IoProps}/>
<TextBox className="p-Home f3_text3 bpt" {...f3_text3Props} {...f3_text3Cb} {...f3_text3IoProps}/>
</Flex>
<Flex className="p-Home feature3_img bpt" {...feature3_imgProps} {...feature3_imgCb} {...feature3_imgIoProps}>
<Image className="p-Home f3_img bpt" {...f3_imgProps} {...f3_imgCb} {...f3_imgIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Installation_guide bpt" {...Installation_guideProps} {...Installation_guideCb} {...Installation_guideIoProps}>
<TextBox className="p-Home Install_text1 bpt" {...Install_text1Props} {...Install_text1Cb} {...Install_text1IoProps}/>
<TextBox className="p-Home Install_text2 bpt" {...Install_text2Props} {...Install_text2Cb} {...Install_text2IoProps}/>
<Image className="p-Home Install_img bpt" {...Install_imgProps} {...Install_imgCb} {...Install_imgIoProps}/>
</Flex>
<Flex className="p-Home Form bpt" {...FormProps} {...FormCb} {...FormIoProps}>
<Flex className="p-Home Form_text bpt" {...Form_textProps} {...Form_textCb} {...Form_textIoProps}>
<TextBox className="p-Home Sub_text1 bpt" {...Sub_text1Props} {...Sub_text1Cb} {...Sub_text1IoProps}/>
<TextBox className="p-Home Sub_Text2 bpt" {...Sub_Text2Props} {...Sub_Text2Cb} {...Sub_Text2IoProps}/>
</Flex>
<Flex className="p-Home Form_elem bpt" {...Form_elemProps} {...Form_elemCb} {...Form_elemIoProps}>
<Input className="p-Home Form_input bpt" {...Form_inputProps} {...Form_inputCb} {...Form_inputIoProps}/>
<Button className="p-Home Form_button bpt" {...Form_buttonProps} {...Form_buttonCb} {...Form_buttonIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Footer bpt" {...FooterProps} {...FooterCb} {...FooterIoProps}>
<Flex className="p-Home Footer_Texts bpt" {...Footer_TextsProps} {...Footer_TextsCb} {...Footer_TextsIoProps}>
<Flex className="p-Home Social_Container bpt" {...Social_ContainerProps} {...Social_ContainerCb} {...Social_ContainerIoProps}>
<Flex className="p-Home Flex44 bpt" {...Flex44Props} {...Flex44Cb} {...Flex44IoProps}>
<Image className="p-Home Footer_logo bpt" {...Footer_logoProps} {...Footer_logoCb} {...Footer_logoIoProps}/>
<TextBox className="p-Home Footer_logo_text bpt" {...Footer_logo_textProps} {...Footer_logo_textCb} {...Footer_logo_textIoProps}/>
<Image className="p-Home Footer_github_img bpt" {...Footer_github_imgProps} {...Footer_github_imgCb} {...Footer_github_imgIoProps}/>
</Flex>
<TextBox className="p-Home Footer_desc bpt" {...Footer_descProps} {...Footer_descCb} {...Footer_descIoProps}/>
<Flex className="p-Home Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Image className="p-Home Linkedin_icon bpt" {...Linkedin_iconProps} {...Linkedin_iconCb} {...Linkedin_iconIoProps}/>
<Image className="p-Home Twitter_Icon bpt" {...Twitter_IconProps} {...Twitter_IconCb} {...Twitter_IconIoProps}/>
<Image className="p-Home Youtube_Icon bpt" {...Youtube_IconProps} {...Youtube_IconCb} {...Youtube_IconIoProps}/>
<Image className="p-Home Slack_Icon bpt" {...Slack_IconProps} {...Slack_IconCb} {...Slack_IconIoProps}/>
</Flex>
</Flex>
<Flex className="p-Home Links_Container bpt" {...Links_ContainerProps} {...Links_ContainerCb} {...Links_ContainerIoProps}>
<Flex className="p-Home Flex40 bpt" {...Flex40Props} {...Flex40Cb} {...Flex40IoProps}>
<TextBox className="p-Home F11_txt bpt" {...F11_txtProps} {...F11_txtCb} {...F11_txtIoProps}/>
<TextBox className="p-Home F12_txt bpt" {...F12_txtProps} {...F12_txtCb} {...F12_txtIoProps}/>
<TextBox className="p-Home F13_txt bpt" {...F13_txtProps} {...F13_txtCb} {...F13_txtIoProps}/>
<TextBox className="p-Home F14_txt bpt" {...F14_txtProps} {...F14_txtCb} {...F14_txtIoProps}/>
</Flex>
<Flex className="p-Home Flex41 bpt" {...Flex41Props} {...Flex41Cb} {...Flex41IoProps}>
<TextBox className="p-Home F21_txt bpt" {...F21_txtProps} {...F21_txtCb} {...F21_txtIoProps}/>
<TextBox className="p-Home F22_txt bpt" {...F22_txtProps} {...F22_txtCb} {...F22_txtIoProps}/>
<TextBox className="p-Home F23_txt bpt" {...F23_txtProps} {...F23_txtCb} {...F23_txtIoProps}/>
<TextBox className="p-Home F24_txt bpt" {...F24_txtProps} {...F24_txtCb} {...F24_txtIoProps}/>
</Flex>
<Flex className="p-Home Flex42 bpt" {...Flex42Props} {...Flex42Cb} {...Flex42IoProps}>
<TextBox className="p-Home F31_txt bpt" {...F31_txtProps} {...F31_txtCb} {...F31_txtIoProps}/>
<TextBox className="p-Home F32_txt bpt" {...F32_txtProps} {...F32_txtCb} {...F32_txtIoProps}/>
<TextBox className="p-Home F33_txt bpt" {...F33_txtProps} {...F33_txtCb} {...F33_txtIoProps}/>
</Flex>
<Flex className="p-Home Flex43 bpt" {...Flex43Props} {...Flex43Cb} {...Flex43IoProps}>
<TextBox className="p-Home F41_txt bpt" {...F41_txtProps} {...F41_txtCb} {...F41_txtIoProps}/>
<TextBox className="p-Home F42_txt bpt" {...F42_txtProps} {...F42_txtCb} {...F42_txtIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Copyright bpt" {...CopyrightProps} {...CopyrightCb} {...CopyrightIoProps}>
<Flex className="p-Home Left_con bpt" {...Left_conProps} {...Left_conCb} {...Left_conIoProps}>
<TextBox className="p-Home Copyright_text bpt" {...Copyright_textProps} {...Copyright_textCb} {...Copyright_textIoProps}/>
</Flex>
<Flex className="p-Home Right_Con bpt" {...Right_ConProps} {...Right_ConCb} {...Right_ConIoProps}>
<TextBox className="p-Home Privacy_Policy bpt" {...Privacy_PolicyProps} {...Privacy_PolicyCb} {...Privacy_PolicyIoProps}/>
<TextBox className="p-Home Terms_of_Use bpt" {...Terms_of_UseProps} {...Terms_of_UseCb} {...Terms_of_UseIoProps}/>
</Flex>
</Flex>
</Flex>
<Flex className="p-Home Fixed_Component bpt" {...Fixed_ComponentProps} {...Fixed_ComponentCb} {...Fixed_ComponentIoProps}>
<Image className="p-Home Made_With_Atri_logo bpt" {...Made_With_Atri_logoProps} {...Made_With_Atri_logoCb} {...Made_With_Atri_logoIoProps}/>
</Flex>
</Div>
  </>);
}
