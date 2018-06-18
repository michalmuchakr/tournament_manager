import _ from 'lodash';

export const SmartPaging = {
  toPaginate: [],
  pages: [],
  visible: [],
  pages_length: 0,
  options: {
    perPage: 10
  },
  fancyPagination(data, perPage, currentPage) {
    this.toPaginate = Object.assign([], data);
    this.pages = _.chunk( this.toPaginate, perPage);
    this.visible = this.pages[ currentPage ];
    const paginator = {
      visibleItems: this.visible,
      pages: this.pages,
      visible: this.visible
    };
    return paginator;
  }
}
