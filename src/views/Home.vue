<template>
  <div id="Home">
    <header class="p-d"></header>
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
              class="p p-h"
              v-for="(value, key) in currentTabs"
              :key="key"
              @click="selectTab(value)"
            >
              <p class="overflow">{{ `Tabs of Event ${value + 1}` }}</p>
              <button class="close" @click.stop="removeTab(value)">+</button>
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
    if (this.currentTabs.length === 1) {
      this.currentTabs = [];
      this.selectTab(null);
    } else {
      this.currentTabs.splice(tabToRemove, 1);
      this.selectTab(
        tabToRemove === this.currentTabs.length
          ? this.currentTabs[this.currentTabs.length - 1]
          : this.currentTabs[tabToRemove]
      );
    }
  }
  selectTab(tab: number | null) {
    console.log("setting to ", tab);
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
  }
  .main-section {
    height: calc(100vh - 60px);
    display: flex;
    .left {
      overflow: scroll;
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
      display: flex;
      overflow: hidden;
      flex-direction: column;
      margin-top: -35px;
      .tabs {
        border: 0;
        border-radius: 20px;
        * {
          color: rgba(255, 255, 255, 0.849);
        }
        > ul {
          list-style: none;
          display: flex;
          > li {
            border-top-left-radius: 20px;
            border-top-right-radius: 20px;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            margin-right: 1px;
            height: 35px;
            display: flex;
            padding: 0 10px;
            justify-content: center;
            align-items: center;
            text-overflow: ellipsis;
            overflow: hidden;
            justify-content: flex-start;
            position: relative;
            .overflow {
              margin: 0;
              white-space: nowrap;
              margin-right: 10px;
            }
            .close {
              position: absolute;
              right: 5px;
              transform: rotate(45deg);
            }
          }
        }
      }
      .selectedTab {
        overflow: scroll;
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
