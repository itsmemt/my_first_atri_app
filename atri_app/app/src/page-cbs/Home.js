import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";









export function useMain_ContainerCb() {
	const onClick = useCallback(callbackFactory("Main_Container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useHeaderCb() {
	const onClick = useCallback(callbackFactory("Header", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useNav_ItemsCb() {
	const onClick = useCallback(callbackFactory("Nav_Items", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLogo_textCb() {
	const onClick = useCallback(callbackFactory("Logo_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useNav_linksCb() {
	const onClick = useCallback(callbackFactory("Nav_links", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLogoTextCb() {
	const onClick = useCallback(callbackFactory("LogoText", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselogo_imgCb() {
	const onClick = useCallback(callbackFactory("logo_img", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useNav_btnCb() {
	const onClick = useCallback(callbackFactory("Nav_btn", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/category/getting-started/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useNav_githubCb() {
	const onClick = useCallback(callbackFactory("Nav_github", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink4Cb() {
	const onClick = useCallback(callbackFactory("Link4", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/tutorials/bkg_swapper/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink1Cb() {
	const onClick = useCallback(callbackFactory("Link1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://atrilabs.com/Showcase",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function uselink2Cb() {
	const onClick = useCallback(callbackFactory("link2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLink3Cb() {
	const onClick = useCallback(callbackFactory("Link3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/blog/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useAtri_gifCb() {
	const onClick = useCallback(callbackFactory("Atri_gif", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImg_containerCb() {
	const onClick = useCallback(callbackFactory("Img_container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useText_containerCb() {
	const onClick = useCallback(callbackFactory("Text_container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useBuid_textCb() {
	const onClick = useCallback(callbackFactory("Buid_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesub_heading_textCb() {
	const onClick = useCallback(callbackFactory("sub_heading_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useBold_DescCb() {
	const onClick = useCallback(callbackFactory("Bold_Desc", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useReg_descCb() {
	const onClick = useCallback(callbackFactory("Reg_desc", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useOpen_source_textCb() {
	const onClick = useCallback(callbackFactory("Open_source_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useGithub_link_imgCb() {
	const onClick = useCallback(callbackFactory("Github_link_img", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useOPEN_SOURCE_txtCb() {
	const onClick = useCallback(callbackFactory("OPEN_SOURCE_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInfo_SectionCb() {
	const onClick = useCallback(callbackFactory("Info_Section", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useDescription_textCb() {
	const onClick = useCallback(callbackFactory("Description_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useCard1Cb() {
	const onClick = useCallback(callbackFactory("Card1", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usecard3Cb() {
	const onClick = useCallback(callbackFactory("card3", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usesemi_bold_textCb() {
	const onClick = useCallback(callbackFactory("semi_bold_text", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox12Cb() {
	const onClick = useCallback(callbackFactory("TextBox12", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFeature1_textCb() {
	const onClick = useCallback(callbackFactory("Feature1_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFeature1_imgCb() {
	const onClick = useCallback(callbackFactory("Feature1_img", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefeature_1Cb() {
	const onClick = useCallback(callbackFactory("feature_1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox1Cb() {
	const onClick = useCallback(callbackFactory("TextBox1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox2Cb() {
	const onClick = useCallback(callbackFactory("TextBox2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox3Cb() {
	const onClick = useCallback(callbackFactory("TextBox3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useCard2Cb() {
	const onClick = useCallback(callbackFactory("Card2", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefeature2_textCb() {
	const onClick = useCallback(callbackFactory("feature2_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefeature2_imgCb() {
	const onClick = useCallback(callbackFactory("feature2_img", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefeature3_textCb() {
	const onClick = useCallback(callbackFactory("feature3_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usefeature3_imgCb() {
	const onClick = useCallback(callbackFactory("feature3_img", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef2_imgCb() {
	const onClick = useCallback(callbackFactory("f2_img", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef3_imgCb() {
	const onClick = useCallback(callbackFactory("f3_img", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef2_text1Cb() {
	const onClick = useCallback(callbackFactory("f2_text1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef2_text2Cb() {
	const onClick = useCallback(callbackFactory("f2_text2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef2_text3Cb() {
	const onClick = useCallback(callbackFactory("f2_text3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef3_text1Cb() {
	const onClick = useCallback(callbackFactory("f3_text1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef3_text2Cb() {
	const onClick = useCallback(callbackFactory("f3_text2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usef3_text3Cb() {
	const onClick = useCallback(callbackFactory("f3_text3", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInstallation_guideCb() {
	const onClick = useCallback(callbackFactory("Installation_guide", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFooterCb() {
	const onClick = useCallback(callbackFactory("Footer", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFormCb() {
	const onClick = useCallback(callbackFactory("Form", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInstall_text2Cb() {
	const onClick = useCallback(callbackFactory("Install_text2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInstall_text1Cb() {
	const onClick = useCallback(callbackFactory("Install_text1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useInstall_imgCb() {
	const onClick = useCallback(callbackFactory("Install_img", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useForm_textCb() {
	const onClick = useCallback(callbackFactory("Form_text", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useForm_elemCb() {
	const onClick = useCallback(callbackFactory("Form_elem", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useSub_text1Cb() {
	const onClick = useCallback(callbackFactory("Sub_text1", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useSub_Text2Cb() {
	const onClick = useCallback(callbackFactory("Sub_Text2", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useForm_buttonCb() {
	const onClick = useCallback(callbackFactory("Form_button", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useForm_inputCb() {
	const onChange = useCallback(callbackFactory("Form_input", "Home", "/", "onChange", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "controlled",
      "selector": [
        "custom",
        "value"
      ]
    }
  ]
}), [])
	const onPressEnter = useCallback(callbackFactory("Form_input", "Home", "/", "onPressEnter", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onChange,onPressEnter }
}
export function useFooter_TextsCb() {
	const onClick = useCallback(callbackFactory("Footer_Texts", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useCopyrightCb() {
	const onClick = useCallback(callbackFactory("Copyright", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLeft_conCb() {
	const onClick = useCallback(callbackFactory("Left_con", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useRight_ConCb() {
	const onClick = useCallback(callbackFactory("Right_Con", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useCopyright_textCb() {
	const onClick = useCallback(callbackFactory("Copyright_text", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function usePrivacy_PolicyCb() {
	const onClick = useCallback(callbackFactory("Privacy_Policy", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTerms_of_UseCb() {
	const onClick = useCallback(callbackFactory("Terms_of_Use", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useSocial_ContainerCb() {
	const onClick = useCallback(callbackFactory("Social_Container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLinks_ContainerCb() {
	const onClick = useCallback(callbackFactory("Links_Container", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex40Cb() {
	const onClick = useCallback(callbackFactory("Flex40", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex41Cb() {
	const onClick = useCallback(callbackFactory("Flex41", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex42Cb() {
	const onClick = useCallback(callbackFactory("Flex42", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex43Cb() {
	const onClick = useCallback(callbackFactory("Flex43", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF11_txtCb() {
	const onClick = useCallback(callbackFactory("F11_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF12_txtCb() {
	const onClick = useCallback(callbackFactory("F12_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Apps/traffic-history",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF13_txtCb() {
	const onClick = useCallback(callbackFactory("F13_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Apps/personal_blog",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF14_txtCb() {
	const onClick = useCallback(callbackFactory("F14_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Apps/full_stack_ecommerce_website",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF21_txtCb() {
	const onClick = useCallback(callbackFactory("F21_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF22_txtCb() {
	const onClick = useCallback(callbackFactory("F22_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF23_txtCb() {
	const onClick = useCallback(callbackFactory("F23_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/blog/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF24_txtCb() {
	const onClick = useCallback(callbackFactory("F24_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://docs.atrilabs.com/tutorials/bkg_swapper/",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF31_txtCb() {
	const onClick = useCallback(callbackFactory("F31_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF32_txtCb() {
	const onClick = useCallback(callbackFactory("F32_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine#how-to-contribute",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF33_txtCb() {
	const onClick = useCallback(callbackFactory("F33_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine/discussions",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF41_txtCb() {
	const onClick = useCallback(callbackFactory("F41_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useF42_txtCb() {
	const onClick = useCallback(callbackFactory("F42_txt", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/conferences",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex44Cb() {
	const onClick = useCallback(callbackFactory("Flex44", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFooter_descCb() {
	const onClick = useCallback(callbackFactory("Footer_desc", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex45Cb() {
	const onClick = useCallback(callbackFactory("Flex45", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFooter_logoCb() {
	const onClick = useCallback(callbackFactory("Footer_logo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFooter_logo_textCb() {
	const onClick = useCallback(callbackFactory("Footer_logo_text", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFooter_github_imgCb() {
	const onClick = useCallback(callbackFactory("Footer_github_img", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useLinkedin_iconCb() {
	const onClick = useCallback(callbackFactory("Linkedin_icon", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://www.linkedin.com/company/atri-labs",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useSlack_IconCb() {
	const onClick = useCallback(callbackFactory("Slack_Icon", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://atricommunity.slack.com/signup#/domain-signup",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useYoutube_IconCb() {
	const onClick = useCallback(callbackFactory("Youtube_Icon", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://www.youtube.com/channel/UC1uR2Q5x_8olWS_Y4PdK1Bw",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTwitter_IconCb() {
	const onClick = useCallback(callbackFactory("Twitter_Icon", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://twitter.com/atrilabs",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFixed_ComponentCb() {
	const onClick = useCallback(callbackFactory("Fixed_Component", "Home", "/", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useMade_With_Atri_logoCb() {
	const onClick = useCallback(callbackFactory("Made_With_Atri_logo", "Home", "/", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "external",
        "url": "https://github.com/Atri-Labs/atrilabs-engine",
        "target": "_blank"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}