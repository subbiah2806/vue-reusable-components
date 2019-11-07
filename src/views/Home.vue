<template>
  <div id="Home">
    <header class="p"></header>
    <section class="main-section">
      <div class="left">
        <ul class="events">
          <li
            class="event"
            v-for="(value, key) in data.events"
            :key="key"
            @click="addEvent(key)"
          >
            {{ `Event${key + 1}` }}
          </li>
        </ul>
      </div>
      <div class="right">
        <div class="tabs">
          <ul>
            <li
              class="li-tab-button"
              v-for="(value, key) in currentTabs"
              :key="key"
              @click="selectTab(value)"
            >
              <p class="overflow">{{ `Tabs of Event ${value + 1}` }}</p>
              <button class="close" @click="removeTab(value)">+</button>
            </li>
          </ul>
        </div>
        <div class="selectedTab" v-if="selectedTab !== null">
          <div class="tab-content">
            <ul>
              <li
                class="li-data"
                v-for="value in data.events[selectedTab].data"
                :key="value._raw"
              >
                {{ value.url }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ListView from "@/components/ListView.vue";
import Form from "@/examples/Form.vue";
import ServiceCalls from "@/examples/serviceCalls.vue";
import { data } from "../index";
@Component({
  components: {
    ListView,
    Form,
    ServiceCalls
  }
})
export default class Home extends Vue {
  private data = data;
  private currentTabs: number[] = [];
  private selectedTab: number | null = null;
  mounted() {
    console.log("data", data.events.length);
  }
  addEvent(event: number) {
    if (!this.currentTabs.includes(event)) {
      this.currentTabs.push(event);
      this.selectedTab = event;
    }
  }
  removeTab(tab: number) {
    const tabToRemove = this.currentTabs.findIndex(CTab => CTab === tab);
    this.currentTabs.splice(tabToRemove, 1);
    if (tabToRemove === this.currentTabs.length) {
      this.$nextTick(() => {
        this.selectTab(this.currentTabs[this.currentTabs.length - 1]);
      });
    }
  }
  selectTab(tab: number) {
    console.log("setting to ", this.currentTabs[this.currentTabs.length - 1]);
    this.selectedTab = tab;
  }
  isMobile() {
    return window.innerWidth < 600;
  }
}
</script>

<style scoped lang="scss">
#Home {
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .close {
    margin-left: 4px;
    background: transparent;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  header {
    height: 60px;
    background-color: grey;
  }
  .main-section {
    flex: 1;
    display: flex;
    .left {
      border: solid 1px grey;
      width: 10%;
      .events {
        list-style: none;
        .event {
          text-align: center;
          padding: 10px 5px;
          border-bottom: solid 1px grey;
          &:hover {
            background-color: #494949;
            cursor: pointer;
          }
        }
      }
    }
    .right {
      width: 90%;
      .tabs {
        margin-top: -40px;
        background-color: white;
        border: 0;
        border-radius: 10px;
        * {
          color: grey;
        }
        > ul {
          list-style: none;
          display: flex;
          > li {
            height: 40px;
            display: flex;
            margin-left: 5px;
            padding: 0 10px;
            justify-content: center;
            align-items: center;
            text-overflow: ellipsis;
            overflow: hidden;
            justify-content: start;
            position: relative;
            &:hover {
              background-color: #c2c2c2;
              border-radius: 10px;
              cursor: pointer;
            }
            .overflow {
              margin: 0;
              white-space: nowrap;
              margin-right: 5px;
            }
            .close {
              position: absolute;
              right: 0;
            }
          }
        }
      }
      .selectedTab {
        .tab-content {
          margin: 20px;
          .li-data {
            margin: 10px 5px;
            padding: 10px 5px;
            border: solid 1px grey;
          }
        }
      }
    }
  }
}
</style>
