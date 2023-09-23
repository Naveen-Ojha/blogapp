import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native'
import RenderHtml from 'react-native-render-html';

export default function AboutScreen() {

  const source = {
    html: `<div class="elementor-inner">
    <div class="elementor-section-wrap">
    <section class="elementor-section elementor-top-section elementor-element elementor-element-2f8257d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2f8257d" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-row">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b5fe35b" data-id="b5fe35b" data-element_type="column">
    <div class="elementor-column-wrap elementor-element-populated">
    <div class="elementor-widget-wrap">
    <h1 class="g1-alpha g1-alpha-2nd page-title">CONTACT</h1>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-2d0b7e6 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2d0b7e6" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-row">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5853870" data-id="5853870" data-element_type="column">
    <div class="elementor-column-wrap elementor-element-populated">
    <div class="elementor-widget-wrap">
    <div class="elementor-element elementor-element-67758f6 elementor-widget elementor-widget-text-editor" data-id="67758f6" data-element_type="widget" data-widget_type="text-editor.default">
    <div class="elementor-widget-container">
    <div class="elementor-text-editor elementor-clearfix">
    <p>If you have any questions for us, please mail to support@houston-equity.com. We will do our best to get back to you as soon as possible.</p>
    <p>Houston Equity Pvt Ltd</p>
    <p>C-47 First Floor, Jangpura Extension</p>
    <p>New Delhi 110014</p>
    <p>Email: support@houston-equity.com</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-1ac7b3e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="1ac7b3e" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-row">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-eb34def" data-id="eb34def" data-element_type="column">
    <div class="elementor-column-wrap elementor-element-populated">
    <div class="elementor-widget-wrap">
    <div class="elementor-element elementor-element-6a52973 elementor-widget elementor-widget-bimber_collection" data-id="6a52973" data-element_type="widget" data-widget_type="bimber_collection.default">
    <div class="elementor-widget-container">
    <div class="g1-collection g1-collection-tiles-m g1-collection-gutter-s g1-collection-columns-2">
    <div class="g1-collection-header">
    <h2 class="g1-title g1-title-align-center g1-beta g1-beta-2nd g1-collection-title">Recommends</h2>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-a1b3f9c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="a1b3f9c" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-row">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-18b69ab" data-id="18b69ab" data-element_type="column">
    <div class="elementor-column-wrap elementor-element-populated">
    <div class="elementor-widget-wrap">
    <div class="elementor-element elementor-element-40a7aa4 elementor-widget elementor-widget-heading" data-id="40a7aa4" data-element_type="widget" data-widget_type="heading.default">
    <div class="elementor-widget-container">
    <h2 class="elementor-heading-title elementor-size-default">MORE ABOUT US</h2>
    </div>
    </div>
    <div class="elementor-element elementor-element-9e9afcb elementor-widget elementor-widget-spacer" data-id="9e9afcb" data-element_type="widget" data-widget_type="spacer.default">&nbsp;</div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-2e752b2 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="2e752b2" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">
    <div class="elementor-row">
    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4d36a0f" data-id="4d36a0f" data-element_type="column">
    <div class="elementor-column-wrap elementor-element-populated">
    <div class="elementor-widget-wrap">
    <div class="elementor-element elementor-element-81903d7 elementor-widget elementor-widget-text-editor" data-id="81903d7" data-element_type="widget" data-widget_type="text-editor.default">
    <div class="elementor-widget-container">
    <div class="elementor-text-editor elementor-clearfix">
    <p><strong>Fashion Sootra</strong> exemplifies the best from the world of fashion, beauty, culture, health, fitness and technology. It showcase new talents and trends with a unique journalistic and artistic quality.</p>
    <p>Covering everything from the latest looks in fashion and beauty to breaking cultural and social trends, it is recognized for its distinctive perspective and stunning visuals.<br />We at Fashion Sootra believe in gaining the trust of our readers and to achieve that we make sure to go to any length in researching and exploiting all the latest trends in Fashion, beauty, culture, Fitness, health and technology.</p>
    <p>Our main goal is to provide you with accuracy level of information on whatever we showcase here. We at Fashion Sootra aims on gaining your trust and confidence in us. If you have any queries on anything you can reach out to us.<br />Fashion Sootra is renowned as a multimedia brand communicating with its audience through website, mobile apps and social fora.</p>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </section>
    <section class="elementor-section elementor-top-section elementor-element elementor-element-931c4be elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="931c4be" data-element_type="section">
    <div class="elementor-container elementor-column-gap-default">&nbsp;</div>
    </section>
    </div>
    </div>`
  }
  const { width } = useWindowDimensions();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.card}>
        <RenderHtml
          contentWidth={width}
          source={source}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    textAlign: 'left',
    padding: 10,
    borderRadius: 5,
    marginTop: -50,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'baseline'
  },
})
