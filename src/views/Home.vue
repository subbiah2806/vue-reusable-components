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
        <div class="pl-4">
          <div class="tabs">
            <button
              class="p p-h"
              v-for="(value, key) in currentTabs"
              :key="key"
              @click="e => selectTab(value, e)"
              @click.right="
                e => {
                  addContextMenu(e, value);
                }
              "
              ref="liTabs"
              :class="selectedTab === value ? 'p-h-active' : ''"
            >
              <div class="overflow" :class="{ hideClose }">
                <p>{{ `Tabs of Event ${value + 1}` }}</p>
              </div>
              <button class="close" @click.stop="removeTab(value)">+</button>
            </button>
          </div>
        </div>
        <div class="selectedTab" v-if="selectedTab !== null">
          <div class="tab-content">
            <ul>
              <li
                class="li-data p-d-columns"
                v-for="value in data.events[selectedTab].data"
                :key="value._raw"
              >
                <div
                  v-for="(val1, key1) in Object.entries(value)"
                  :key="key1"
                  class="li-data-content"
                >
                  <div class="p-l-text">{{ val1[0] }}</div>
                  <div>{{ val1[1] }}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <div class="contextMenu p" ref="context">
      <button @click="closeCurrentTab">close tab</button>
      <button @click="closeAllTab">close All tab</button>
      <button @click="closeAllToRight">close tab in right</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import ListView from "@/components/ListView.vue";
import Form from "@/examples/Form.vue";
import ServiceCalls from "@/examples/serviceCalls.vue";
import { data } from "../index";
import VueSelect from "@/components/forms/VueSelect.vue";
@Component({
  components: {
    ListView,
    Form,
    ServiceCalls,
    VueSelect
  }
})
export default class Home extends Vue {
  private data = data;
  private currentTabs: number[] = [];
  private selectedTab: number | null = null;
  private hideClose: boolean = false;
  private contextMenu: string = "";
  private contextSelected: number | null = null;
  mounted() {
    const BODY = document.getElementsByTagName("body");
    if (BODY[0]) {
      BODY[0].addEventListener("click", e => {
        const context: any = this.$refs.context;
        context.style.display = "none";
        this.contextSelected = null;
      });
    }
  }
  closeAllTab() {
    this.currentTabs = [];
    this.selectedTab = null;
    this.contextSelected = null;
  }
  closeCurrentTab() {
    if (this.contextSelected !== null) {
      this.removeTab(this.contextSelected);
      this.contextSelected = null;
    }
  }
  closeAllToRight() {
    console.log(this.contextSelected, this.currentTabs);
    if (this.contextSelected !== null) {
      const currentTabIndex = this.currentTabs.findIndex(
        tab => tab === this.contextSelected
      );
      const nextTab = this.currentTabs[currentTabIndex + 1];
      if (nextTab) {
        this.removeTab(nextTab);
      }
    }
    this.contextSelected = null;
  }
  hideCloseFn() {
    this.$nextTick(() => {
      const liTaabs: any = this.$refs.liTabs;
      if (Array.isArray(liTaabs)) {
        if (liTaabs[0].clientWidth < 107) {
          if (!this.hideClose) {
            this.hideClose = true;
          }
        } else {
          if (this.hideClose) {
            this.hideClose = false;
          }
        }
      }
    });
  }
  addEvent(event: number) {
    if (!this.currentTabs.includes(event)) {
      this.currentTabs.push(event);
      this.selectedTab = event;
      this.hideCloseFn();
    } else {
      this.selectedTab = event;
    }
  }
  addContextMenu(e: any, value: number) {
    if (!Array.isArray(this.$refs.context) && e.target) {
      this.contextSelected = value;
      const bound = e.target.getBoundingClientRect();
      const context: any = this.$refs.context;
      console.log("bound", bound);
      context.style.top = `${bound.top}px`;
      context.style.left = `${bound.left}px`;
      context.style.display = "flex";
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
    this.hideCloseFn();
  }
  selectTab(tab: number | null) {
    this.selectedTab = tab;
  }
  isMobile() {
    return window.innerWidth < 600;
  }
}
</script>

<style scoped lang="scss">
@import "@/main.scss";
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
      width: 170px;
      .events {
        list-style: none;
        .event {
          text-align: center;
          padding: 20px 5px;
          border-bottom: solid 1px grey;
          &:hover {
            background-color: #494949;
            cursor: pointer;
          }
        }
      }
    }
    .right {
      flex: 1 1;
      display: flex;
      overflow: hidden;
      flex-direction: column;
      margin-top: -35px;
      .tabs {
        border: 0;
        border-radius: 20px;
        list-style: none;
        display: flex;
        .liExpand {
          width: 14%;
        }
        > button {
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
          border: 0;
          margin-right: 2px;
          height: 35px;
          display: flex;
          padding: 0 5px 0 10px;
          justify-content: center;
          align-items: center;
          text-overflow: ellipsis;
          overflow: hidden;
          justify-content: flex-start;
          display: flex;
          &:focus {
            flex-shrink: 0;
          }
          &:active {
            flex-shrink: 0;
          }
          .hideClose {
            overflow: unset !important;
          }
          .overflow {
            overflow: hidden;
            display: flex;
            align-items: center;
            p {
              margin: 0;
              white-space: nowrap;
            }
          }
          .close {
            transform: rotate(45deg);
          }
        }
      }

      .selectedTab {
        overflow: scroll;
        border: solid 1px grey;
        margin: 20px;
        .tab-content {
          .li-data {
            padding: 10px 5px;
            border: solid 1px grey;
            display: flex;
            overflow: hidden;
            .li-data-content {
              overflow: hidden;
              padding: 0 5px;
              width: 100%;
            }
          }
        }
      }
    }
  }
  .contextMenu {
    position: absolute;
    display: none;
    flex-direction: column;
    padding: 10px 5px;
    border: 1;
    border-radius: 10px;
    > button {
      background-color: transparent;
      border: 0;
      padding: 5px;
      border-bottom: solid 1px lightblue;
    }
  }
}
</style>
