<template>
  <div class="prop-table">
    <h2>Props</h2>
    <table>
      <thead>
        <tr>
          <th>
            Name
          </th>
          <th>
            Type
          </th>
          <th>
            Default
          </th>
          <th>
            Description
          </th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="prop in props" :key="prop.name">
          <td>
            {{ prop.name.replace('!', '') }}
            <span v-if="prop.name.endsWith('!')" class="required"
              >Required</span
            >
          </td>
          <td>
            {{ type(prop.type) }}
          </td>
          <td>
            {{ type(prop.default) }}
          </td>
          <td style="max-width: 400px;" v-html="prop.description"></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({})
export default class extends Vue {
  @Prop() props: any[];

  type(type: string | string[]) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    const types = type.map(t => {
      if (typeof t === 'string') {
        if (!['string', 'boolean', 'number'].includes(t) && t.toLowerCase() === t) {
          return `'${t}'`;
        } else {
          return t;
        }
      }
      return t;
    });

    return types.join(' | ');
  }
}
</script>

<style lang="scss" scoped>
.prop-table {
  table {
    border-collapse: collapse;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgb(204, 204, 204);
    th,
    td {
      text-align: left;
      padding: 12px 8px;
    }
    th {
      border-bottom: 1px solid rgb(204, 204, 204);
    }
    tr:nth-child(even) {
      background-color: #f1f1f1;
    }
    td:not(:last-of-type),
    th:not(:last-of-type) {
      border-right: 1px solid rgb(204, 204, 204);
    }
    tr:not(:first-of-type) {
      td {
        border-top: 1px solid rgb(204, 204, 204);
      }
    }
  }

  .required {
    background-color: rgb(255, 238, 238);
    font-size: 12px;
    border-radius: 2px;
    padding: 2px 4px;
    color: rgb(180, 0, 0);
  }
}
</style>
