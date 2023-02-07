# Styled Props for React Native
Styling React Native component like it is TailwindCSS.

---

## Installation

```sh
npm install @chengsokdara/styled-props --save
```

```sh
yarn add @chengsokdara/styled-props
```

## Getting Start
What styled-props can do?

#### 1. inject styler into custom view

```jsx
import {
  injectStyles,
  // import styles you want to inject
  backgroundStyle,
  flexStyle,
} from '@chengsokdara/styled-props'

// Create custom view by injecting styles
const CustomView = (props) => {
  const styles = injectStyles([backgroundStyle, flexStyle], props)

  return <View style={[props.style, styles]} />
}
```

#### 2. use custom view with custom props

```jsx
import { CustomView } from 'your-custom-view-path'

// Usage examples
const App = () => {
  const [bg, setBg] = useState('red')
  return (
    {/* When style value a static */}
    <CustomView bg-00DDFF flex-1>
      {/* When style value are dynamic*/}
      <CustomView bg={bg} />
    </CustonView>
  )
}
```

## API

* ##### alignContent
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| content | alignContent | string | content={'between'} |
| *content-value* | alignContent | string | content-between |

*content-value: start | end | center | between | around | evenly*

* ##### alignItems
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| items | alignItems | string | items={'center'} |
| *items-value* | alignItems | string | items-center |

*items-value: start | end | center | baseline | stretch*

* ##### alignSelf
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| self | alignSelf | string | self={'stretch'} |
| *self-value* | alignSelf | string | self-stretch |

*self-value: start | end | center | baseline | stretch*

* ##### backgroundStyle
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| bg | backgroundColor | string | bg={'red'} |
| *bg-hex* | backgroundColor | string | bg-FF0000 |

*bg-hex: bg-FF0000 will be converted to backgroundColor: "#FF0000"*

* ##### borderStyle
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| bc | borderColor | string | bc={'red'} |
| bc-*hex* | borderColor | string | bc-FF0000 |
| bcb | borderColorBottom | string | bcb={'red'} |
| bcb-*hex* | borderColorBottom | string | bcb-FF0000 |
| bcl | borderColorLeft | string | bcl={'red'} |
| bcl-*hex* | borderColorLeft | string | bcl-FF0000 |
| bcr | borderColorRight | string | bcr={'red'} |
| bcr-*hex* | borderColorRight | string | bcr-FF0000 |
| bct | borderColorTop | string | bct={'red'} |
| bct-*hex* | borderColorTop | string | bct-FF0000 |
| br | borderRadius | number | br={4} |
| br-*value* | borderRadius | number | br-4 |
| brb | borderRadiusBottom | number | brb={4} |
| brb-*value* | borderRadiusBottom | number | brb-4 |
| brbl | borderRadiusBottomLeft | number | brbl={4} |
| brbl-*value* | borderRadiusBottomLeft | number | brbl-4 |
| brbr | borderRadiusBottomRight | number | brbr={4} |
| brbr-*value* | borderRadiusBottomRight | number | brbr-4 |
| brl | borderRadiusLeft | number | brl={4} |
| brl-*value* | borderRadiusLeft | number | brl-4 |
| brr | borderRadiusRight | number | brr={4} |
| brr-*value* | borderRadiusRight | number | brr-4 |
| brt | borderRadiusTop | number | brt={4} |
| brt-*value* | borderRadiusTop | number | brt-4 |
| brtl | borderRadiusTopLeft | number | brtl={4} |
| brtl-*value* | borderRadiusTopLeft | number | brtl-4 |
| brtr | borderRadiusTopRight | number | brtr={4} |
| brtr-*value* | borderRadiusTopRight | number | brtr-4 |
| bs | borderStyle | string | bs={'solid'} |
| *bs-value* | borderStyle | string | bs-solid |
| bw | borderWidth | number | bw={1} |
| bw-*value* | borderWidth | number | bw-1 |
| bwb | borderWidthBottom | number | bwb={1} |
| bwb-*value* | borderWidthBottom | number | bwb-1 |
| bwl | borderWidthLeft | number | bwl={1} |
| bwl-*value* | borderWidthLeft | number | bwl-1 |
| bwr | borderWidthRight | number | bwr={1} |
| bwr-*value* | borderWidthRight | number | bwr-1 |
| bwt | borderWidthTop | number | bwt={1} |
| bwt-*value* | borderWidthTop | number | bwt-1 |

*bs-value: solid | dotted | dashed*

* ##### colorStyle
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| color | color | string | color={'blue'} |
| *color-value* | color | string | color-0000FF |

*color-hex: color-0000FF will be converted to color: "#0000FF"*

* ##### flexAlignment
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| center | alignItems<br />justifyContent | boolean | center |
| center-*value* | alignItems<br />justifyContent | boolean | center |
| items | alignItems | string | items={'center'} |
| *items-value* | alignItems | string | items-center |
| justify | justifyContent | string | self={'stretch'} |
| *justify-value* | justifyContent | string | self-stretch |

*items-value: start | end | center | baseline | stretch*

*justify-value: start | end | center | between | around | evenly*

* ##### flexDirection
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| col | flexDirection | boolean | col |
| row | flexDirection | boolean | row |

* ##### flexGrow
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| grow | flexGrow | boolean | grow |
| grow-0 | flexGrow | boolean | grow-o |
| grow-*value* | flexGrow | number | grow-1 |

* ##### flexStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| basis | flexBasis | number,string | basis={168} |
| *basis-value* | flexBasis | string | basis-168 |
| flex | flex | number | flex={1} |
| *flex-value* | flex | number | flex-1 |
| *flex-nowrap* | flexWrap | boolean | flex-nowrap |
| *flex-reverse* | flexWrap | boolean | flex-reverse |
| *flex-wrap* | flexWrap | boolean | flex-wrap |
| grow | flexGrow | boolean | grow |
| grow-0 | flexGrow | boolean | grow-o |
| grow-*value* | flexGrow | number | grow-1 |
| shrink | flexShrink | boolean | shrink |
| shrink-0 | flexShrink | boolean | shrink-o |
| shrink-*value* | flexShrink | number | shrink-1 |

*basis-value: basis-100pct will be converted to flexBasis: "100%"*

*flex-nowrap will be converted to flexWrap: 'nowrap'*

*flex-reverse will be converted to flexWrap: 'reverse'*

*flex-wrap will be converted to flexWrap: 'wrap'*

* #### flexboxStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| basis | flexBasis | number,string | basis={168} |
| *basis-value* | flexBasis | string | basis-168 |
| center | alignItems<br />justifyContent | boolean | center |
| center-*value* | alignItems<br />justifyContent | boolean | center |
| col | flexDirection | boolean | col |
| content | alignContent | string | content={'between'} |
| *content-value* | alignContent | string | content-between |
| flex | flex | number | flex={1} |
| *flex-value* | flex | number | flex-1 |
| *flex-nowrap* | flexWrap | boolean | flex-nowrap |
| *flex-reverse* | flexWrap | boolean | flex-reverse |
| *flex-wrap* | flexWrap | boolean | flex-wrap |
| grow | flexGrow | boolean | grow |
| grow-0 | flexGrow | boolean | grow-o |
| grow-*value* | flexGrow | number | grow-1 |
| items | alignItems | string | items={'center'} |
| *items-value* | alignItems | string | items-center |
| justify | justifyContent | string | self={'stretch'} |
| *justify-value* | justifyContent | string | self-stretch |
| row | flexDirection | boolean | row |
| self | alignSelf | string | self={'stretch'} |
| *self-value* | alignSelf | string | self-stretch |
| shrink | flexShrink | boolean | shrink |
| shrink-0 | flexShrink | boolean | shrink-o |
| shrink-*value* | flexShrink | number | shrink-1 |




*basis-value: basis-100pct will be converted to flexBasis: "100%"*

*content-value: start | end | center | between | around | evenly*

*flex-nowrap will be converted to flexWrap: 'nowrap'*

*items-value: start | end | center | baseline | stretch*

*justify-value: start | end | center | between | around | evenly*

*self-value: start | end | center | baseline | stretch*

* ### fontStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| bold | fontWeight | boolean | bold |
| font | fontFamily | string | font={"Roboto"} |
| italic | fontStyle | boolean | italic |
| size | fontSize | number | size={12} |
| *size-value | fontSizse | number | size-12 |
| weight-bold | fontWeight | boolean | weight-bold |
| weight-light | fontWeight | boolean | weight-light |
| weight-medium | fontWeight | boolean | weight-medium |
| weight-regular | fontWeight | boolean | weight-regular |

* ### fontSizeStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| size | fontSize | number | size={12} |
| *size-value | fontSizse | number | size-12 |

* ### fontStyleStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| italic | fontStyle | boolean | italic |

* ### fontWeightStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| bold | fontWeight | boolean | bold |
| weight-bold | fontWeight | boolean | weight-bold |
| weight-light | fontWeight | boolean | weight-light |
| weight-medium | fontWeight | boolean | weight-medium |
| weight-regular | fontWeight | boolean | weight-regular |

* ### justifyContent
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| justify | justifyContent | string | self={'stretch'} |
| *justify-value* | justifyContent | string | self-stretch |

*justify-value: start | end | center | between | around | evenly*

* ### marginStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| m | margin | number | m={10} |
| *m-value* | margin | number | m-10 |
| mb | marginBottom | number | mb={10} |
| *mb-value* | marginBottom | number | mb-10 |
| ml | marginLeft | number | ml={10} |
| *ml-value* | marginLeft | number | ml-10 |
| mr | marginRight | number | mr={10} |
| *mr-value* | marginRight | number | mr-10 |
| mt | marginTop | number | mt={10} |
| *mt-value* | marginTop | number | mt-10 |
| mx | marginHorizontal | number | mx={10} |
| *mx-value* | marginHorizontal | number | mx-10 |
| my | marginVertical | number | my={10} |
| *my-value* | marginVertical | number | my-10 |

* ### overflowSstyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| ovf | overflow | string | ovf={"scroll"} |
| *ovf-value* | overflow | string | ovf-scroll |

*ovf-value: hidden | scroll | visible*

* ### paddingStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| p | padding | number | p={10} |
| *p-value* | padding | number | p-10 |
| pb | paddingBottom | number | pb={10} |
| *pb-value* | paddingBottom | number | pb-10 |
| pl | paddingLeft | number | pl={10} |
| *pl-value* | paddingLeft | number | pl-10 |
| pr | paddingRight | number | pr={10} |
| *pr-value* | paddingRight | number | pr-10 |
| pt | paddingTop | number | pt={10} |
| *pt-value* | paddingTop | number | pt-10 |
| px | paddingHorizontal | number | px={10} |
| *px-value* | paddingHorizontal | number | px-10 |
| py | paddingVertical | number | py={10} |
| *py-value* | paddingVertical | number | py-10 |

* ### positionStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| absolute | position | boolean | absolute |
| absolute | position<br/>bottom<br/>left<br/>right</br>top | number | absolute={0} |
| absolute-0 | position<br/>bottom<br/>left<br/>right</br>top | boolean | absolute-0 |
| *bottom-value* | bottom | number | bottom-10 |
| *left-value* | left | number | left-10 |
| relative | position | boolean | relative |
| *right-value | right | number | right-10 |
| *top-value | top | number | top-10 |
| *z-value | zIndex | number | z-1 |

* ### resizeModeStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| resize-cover | resizeMode | boolean | resize-cover |
| resize-contain | resizeMode | boolean | resize-contain |
| resize-stretch | resizeMode | boolean | resize-stretch |
| resize-repeat | resizeMode | boolean | resize-repeat |
| resize-center | resizeMode | boolean | resize-center |

* ### sizingStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| h | height | number | h={10} |
| h | height | string | h={"100%"} |
| *h-value | height | number | h-10 |
| *h-value* | height | string | h-100pct |
| maxh | maxHeight | number | maxh={10} |
| maxh | maxHeight | string | maxh={"100%"} |
| *maxh-value* | maxHeight | number | maxh-10 |
| *maxh-value* | maxHeight | string | maxh-100pct |
| maxw | maxWidth | number | maxw={10} |
| maxw | maxWidth | string | maxw={"100%"} |
| *maxw-value* | maxWidth | number | maxw-10 |
| *maxw-value* | maxWidth | string | maxw-100pct |
| minh | minHeight | number | minh={10} |
| minh | minHeight | string | minh={"100%"} |
| *minh-value* | minHeight | number | minh-10 |
| *minh-value* | minHeight | string | minh-100pct |
| minw | minWidth | number | minw={10} |
| minw | minWidth | string | minw={"100%"} |
| *minw-value* | minWidth | number | minw-10 |
| *minw-value* | minWidth | string | minw-100pct |
| w | width | number | w={10} |
| w | width | string | w={"100%"} |
| *w-value | width | number | w-10 |
| *w-value* | width | string | w-100pct |

* ### spacingStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| m | margin | number | m={10} |
| *m-value* | margin | number | m-10 |
| mb | marginBottom | number | mb={10} |
| *mb-value* | marginBottom | number | mb-10 |
| ml | marginLeft | number | ml={10} |
| *ml-value* | marginLeft | number | ml-10 |
| mr | marginRight | number | mr={10} |
| *mr-value* | marginRight | number | mr-10 |
| mt | marginTop | number | mt={10} |
| *mt-value* | marginTop | number | mt-10 |
| mx | marginHorizontal | number | mx={10} |
| *mx-value* | marginHorizontal | number | mx-10 |
| my | marginVertical | number | my={10} |
| *my-value* | marginVertical | number | my-10 |
| p | padding | number | p={10} |
| *p-value* | padding | number | p-10 |
| pb | paddingBottom | number | pb={10} |
| *pb-value* | paddingBottom | number | pb-10 |
| pl | paddingLeft | number | pl={10} |
| *pl-value* | paddingLeft | number | pl-10 |
| pr | paddingRight | number | pr={10} |
| *pr-value* | paddingRight | number | pr-10 |
| pt | paddingTop | number | pt={10} |
| *pt-value* | paddingTop | number | pt-10 |
| px | paddingHorizontal | number | px={10} |
| *px-value* | paddingHorizontal | number | px-10 |
| py | paddingVertical | number | py={10} |
| *py-value* | paddingVertical | number | py-10 |

* ### textAlignStyles
| prop name | style name | value type | example |
| --------- | ---------- | ---- | ------- |
| align | textAlign | string | align={"center"} |
| *align-value* | textAlign | string | align-center|

*align-value: auto | center | left | right | justify*