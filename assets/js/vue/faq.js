import State from '../state.js';

export default {
  tagName: 'faq',
  data() {
    return {
      entriesWithState: [],
    };
  },
  beforeMount() {
    this.entriesWithState = this.entries.map((entry, index) => {
      entry.detailClasses = null;
      entry.isOpen = null;
      entry.isDetailsOpen = null;
      entry.height = null;
      entry.id = `entry-${index}`;

      return entry;
    });
  },
  computed: {
    classList() {
      return ['faq', 'utility-animation', 'fade-in-bottom', 'container space-top-2', 'vue-component'];
    },
    headlineClasses() {
      return `faq__headline ${this.headline?.classes ? this.headline.classes : ''}`;
    },
    headlineLevel() {
      return this.headline?.level ? this.headline.level : 'h2';
    },
  },
  methods: {
    handleClick(entry) {
      entry.isOpen = entry.isOpen === null ? true : null;

      if (entry.isOpen) entry.isDetailsOpen = true;
    },
    getElementByRef(entry) {
      const ref = this.$refs[entry?.id];

      if (!ref || ref.length === 0) return;

      return ref[0];
    },
    afterLeave(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      entry.isDetailsOpen = null;

      element.style.removeProperty('display');
      element.style.removeProperty('height');

      entry.detailClasses = null;
    },
    enter(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      const height = element.offsetHeight;

      element.style.removeProperty('height');
      element.style.height = 0;
      element.style.paddingTop = 0;
      element.style.paddingBottom = 0;
      element.style.marginTop = 0;
      element.style.marginBottom = 0;

      setTimeout(() => {
        element.style.height = `${height}px`;
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
      });
    },
    leave(entry) {
      const element = this.getElementByRef(entry);

      if (!element) return;

      const height = element.offsetHeight;

      entry.detailClasses = State.IS_COLLAPSING;

      setTimeout(() => {
        element.style.height = `${height}px`;
      });
    },
  },
  props: {
    headline: Object,
    entries: Array,
  },
  template: `
    <div :class="classList" data-utility-animation-step="1">
      <div class="row">
        <div class="col-lg-8">
          <headline :text="headline?.text" :level="headlineLevel" :classes="headlineClasses" />
          <details v-for="entry in entriesWithState" :open="entry.isDetailsOpen" :class="entry.detailClasses">
            <summary @click.prevent="handleClick(entry)" :open="entry.isDetailsOpen">
              <div class="faq__summary zoom-in-out" data-utility-animation-step="1">{{ entry.summary }}</div>
              <div class="faq__icon-frame">
                <div class="faq__icon bouncing" data-utility-animation-step="3">
                  <icon icon="arrow-narrow" direction="clockwise" size="small" />
                </div>
              </div>
            </summary>
            <Transition @after-leave="afterLeave(entry)" @enter="enter(entry)" @before-leave="leave(entry)">
              <div class="faq__content" v-show="entry.isOpen" :ref="entry.id">
                <div class="faq__text" v-html="entry.text" ></div>
              </div>
            </Transition>
          </details>
          <div class="zoom-in-out" data-utility-animation-step="2">
            Ich bin initial im Loading State, so dass man mich nicht sieht und ich starte erst nach dem Ende von Step2
          </div>
        </div>
      </div>
    </div>`,
};
