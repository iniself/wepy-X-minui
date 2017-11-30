'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function hexToRgb(hex) {
  var color = [];
  var rgb = [];

  hex = hex.replace(/#/, '');

  if (hex.length === 3) {
    var tmp = [];

    for (var i = 0; i < 3; i++) {
      tmp.push(hex.charAt(i) + hex.charAt(i));
    }

    hex = tmp.join('');
  }

  for (var _i = 0; _i < 3; _i++) {
    color[_i] = '0x' + hex.substr(_i * 2, 2);
    rgb.push(parseInt(Number(color[_i])));
  }

  return rgb.join(',');
}

exports.default = Component({
  properties: {
    status: {
      type: String,
      value: 'hide',
      observer: function observer(newStatusValue) {
        this.setData({
          status: newStatusValue
        });
      }
    },
    opacity: {
      type: [String, Number],
      value: 0.6
    },
    backgroundColor: {
      type: String,
      value: '#000000'
    },
    locked: {
      type: [String],
      value: 'hide'
    },
    contentAlign: {
      type: String,
      value: 'tl'
    },
    __positionStyle: {
      type: String,
      value: 'top:0; left:0'
    }
  },

  data: {},

  methods: {
    omMaskTap: function omMaskTap() {
      var data = this.data;

      if (data.locked && data.locked !== 'true') {
        this.setData({
          status: 'hide'
        });
      }
    }
  },

  attached: function attached() {
    var data = this.data;

    this.setData({
      backgroundColor: hexToRgb(data.backgroundColor)
    });

    var contentAlignStyle = void 0;

    switch (data.contentAlign) {
      case 'tl':
        {
          contentAlignStyle = 'top:0; left:0';
          break;
        }

      case 'tr':
        {
          contentAlignStyle = 'top:0; right:0';
          break;
        }

      case 'bl':
        {
          contentAlignStyle = 'bottom:0; left:0';
          break;
        }

      case 'br':
        {
          contentAlignStyle = 'bottom:0; right:0';
          break;
        }
    }

    this.setData({
      __positionStyle: contentAlignStyle
    });
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJoZXhUb1JnYiIsImhleCIsImNvbG9yIiwicmdiIiwicmVwbGFjZSIsImxlbmd0aCIsInRtcCIsImkiLCJwdXNoIiwiY2hhckF0Iiwiam9pbiIsInN1YnN0ciIsInBhcnNlSW50IiwiTnVtYmVyIiwicHJvcGVydGllcyIsInN0YXR1cyIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm9ic2VydmVyIiwibmV3U3RhdHVzVmFsdWUiLCJzZXREYXRhIiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImxvY2tlZCIsImNvbnRlbnRBbGlnbiIsIl9fcG9zaXRpb25TdHlsZSIsImRhdGEiLCJtZXRob2RzIiwib21NYXNrVGFwIiwiYXR0YWNoZWQiLCJjb250ZW50QWxpZ25TdHlsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTQSxRQUFULENBQWtCQyxHQUFsQixFQUF1QjtBQUNuQixNQUFJQyxRQUFRLEVBQVo7QUFDQSxNQUFJQyxNQUFNLEVBQVY7O0FBRUFGLFFBQU1BLElBQUlHLE9BQUosQ0FBWSxHQUFaLEVBQWlCLEVBQWpCLENBQU47O0FBRUEsTUFBSUgsSUFBSUksTUFBSixLQUFlLENBQW5CLEVBQXNCO0FBQ3BCLFFBQUlDLE1BQU0sRUFBVjs7QUFFQSxTQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJELFVBQUlFLElBQUosQ0FBU1AsSUFBSVEsTUFBSixDQUFXRixDQUFYLElBQWdCTixJQUFJUSxNQUFKLENBQVdGLENBQVgsQ0FBekI7QUFDRDs7QUFFRE4sVUFBTUssSUFBSUksSUFBSixDQUFTLEVBQVQsQ0FBTjtBQUNEOztBQUVELE9BQUssSUFBSUgsS0FBSSxDQUFiLEVBQWdCQSxLQUFJLENBQXBCLEVBQXVCQSxJQUF2QixFQUE0QjtBQUMxQkwsVUFBTUssRUFBTixJQUFXLE9BQU9OLElBQUlVLE1BQUosQ0FBV0osS0FBSSxDQUFmLEVBQWtCLENBQWxCLENBQWxCO0FBQ0FKLFFBQUlLLElBQUosQ0FBU0ksU0FBU0MsT0FBT1gsTUFBTUssRUFBTixDQUFQLENBQVQsQ0FBVDtBQUNEOztBQUVELFNBQU9KLElBQUlPLElBQUosQ0FBUyxHQUFULENBQVA7QUFDRDs7O0FBR0NJLGNBQVk7QUFDVkMsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU8sTUFGRDtBQUdOQyxnQkFBVSxrQkFBVUMsY0FBVixFQUEwQjtBQUNsQyxhQUFLQyxPQUFMLENBQWE7QUFDWE4sa0JBQVFLO0FBREcsU0FBYjtBQUdEO0FBUEssS0FERTtBQVVWRSxhQUFTO0FBQ1BOLFlBQU0sQ0FBQ0MsTUFBRCxFQUFTSixNQUFULENBREM7QUFFUEssYUFBTztBQUZBLEtBVkM7QUFjVksscUJBQWlCO0FBQ2ZQLFlBQU1DLE1BRFM7QUFFZkMsYUFBTztBQUZRLEtBZFA7QUFrQlZNLFlBQVE7QUFDTlIsWUFBTSxDQUFDQyxNQUFELENBREE7QUFFTkMsYUFBTztBQUZELEtBbEJFO0FBc0JWTyxrQkFBYztBQUNaVCxZQUFNQyxNQURNO0FBRVpDLGFBQU87QUFGSyxLQXRCSjtBQTBCVlEscUJBQWlCO0FBQ2ZWLFlBQU1DLE1BRFM7QUFFZkMsYUFBTztBQUZRO0FBMUJQLEc7O0FBZ0NaUyxRQUFNLEU7O0FBRU5DLFdBQVM7QUFDUEMsZUFBVyxxQkFBWTtBQUNyQixVQUFJRixPQUFPLEtBQUtBLElBQWhCOztBQUVBLFVBQUlBLEtBQUtILE1BQUwsSUFBZUcsS0FBS0gsTUFBTCxLQUFnQixNQUFuQyxFQUEyQztBQUN6QyxhQUFLSCxPQUFMLENBQWE7QUFDWE4sa0JBQVE7QUFERyxTQUFiO0FBR0Q7QUFDRjtBQVRNLEc7O0FBWVRlLFlBQVUsb0JBQVk7QUFDcEIsUUFBSUgsT0FBTyxLQUFLQSxJQUFoQjs7QUFFQSxTQUFLTixPQUFMLENBQWE7QUFDWEUsdUJBQWlCdkIsU0FBUzJCLEtBQUtKLGVBQWQ7QUFETixLQUFiOztBQUtBLFFBQUlRLDBCQUFKOztBQUVBLFlBQVFKLEtBQUtGLFlBQWI7QUFDRSxXQUFLLElBQUw7QUFBVztBQUNUTSw4QkFBb0IsZUFBcEI7QUFDQTtBQUNEOztBQUVELFdBQUssSUFBTDtBQUFXO0FBQ1RBLDhCQUFvQixnQkFBcEI7QUFDQTtBQUNEOztBQUVELFdBQUssSUFBTDtBQUFXO0FBQ1RBLDhCQUFvQixrQkFBcEI7QUFDQTtBQUNEOztBQUVELFdBQUssSUFBTDtBQUFXO0FBQ1RBLDhCQUFvQixtQkFBcEI7QUFDQTtBQUNEO0FBbkJIOztBQXNCQSxTQUFLVixPQUFMLENBQWE7QUFDWEssdUJBQWlCSztBQUROLEtBQWI7QUFJRCIsImZpbGUiOiJpbmRleC53eGMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBoZXhUb1JnYihoZXgpIHtcbiAgICBsZXQgY29sb3IgPSBbXTtcbiAgICBsZXQgcmdiID0gW107XG5cbiAgICBoZXggPSBoZXgucmVwbGFjZSgvIy8sICcnKTtcblxuICAgIGlmIChoZXgubGVuZ3RoID09PSAzKSB7XG4gICAgICBsZXQgdG1wID0gW107XG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIHRtcC5wdXNoKGhleC5jaGFyQXQoaSkgKyBoZXguY2hhckF0KGkpKTtcbiAgICAgIH1cblxuICAgICAgaGV4ID0gdG1wLmpvaW4oJycpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICBjb2xvcltpXSA9ICcweCcgKyBoZXguc3Vic3RyKGkgKiAyLCAyKTtcbiAgICAgIHJnYi5wdXNoKHBhcnNlSW50KE51bWJlcihjb2xvcltpXSkpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmdiLmpvaW4oJywnKTtcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2hpZGUnLFxuICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKG5ld1N0YXR1c1ZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHN0YXR1czogbmV3U3RhdHVzVmFsdWUsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvcGFjaXR5OiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgIHZhbHVlOiAwLjZcbiAgICAgIH0sXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJyMwMDAwMDAnXG4gICAgICB9LFxuICAgICAgbG9ja2VkOiB7XG4gICAgICAgIHR5cGU6IFtTdHJpbmddLFxuICAgICAgICB2YWx1ZTogJ2hpZGUnXG4gICAgICB9LFxuICAgICAgY29udGVudEFsaWduOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICd0bCdcbiAgICAgIH0sXG4gICAgICBfX3Bvc2l0aW9uU3R5bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ3RvcDowOyBsZWZ0OjAnXG4gICAgICB9XG4gICAgfSxcblxuICAgIGRhdGE6IHt9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgb21NYXNrVGFwOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICAgIGlmIChkYXRhLmxvY2tlZCAmJiBkYXRhLmxvY2tlZCAhPT0gJ3RydWUnKSB7XG4gICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgIHN0YXR1czogJ2hpZGUnXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYXR0YWNoZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIGxldCBkYXRhID0gdGhpcy5kYXRhO1xuXG4gICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGhleFRvUmdiKGRhdGEuYmFja2dyb3VuZENvbG9yKVxuICAgICAgfSk7XG5cblxuICAgICAgbGV0IGNvbnRlbnRBbGlnblN0eWxlO1xuXG4gICAgICBzd2l0Y2ggKGRhdGEuY29udGVudEFsaWduKSB7XG4gICAgICAgIGNhc2UgJ3RsJzoge1xuICAgICAgICAgIGNvbnRlbnRBbGlnblN0eWxlID0gJ3RvcDowOyBsZWZ0OjAnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAndHInOiB7XG4gICAgICAgICAgY29udGVudEFsaWduU3R5bGUgPSAndG9wOjA7IHJpZ2h0OjAnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FzZSAnYmwnOiB7XG4gICAgICAgICAgY29udGVudEFsaWduU3R5bGUgPSAnYm90dG9tOjA7IGxlZnQ6MCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBjYXNlICdicic6IHtcbiAgICAgICAgICBjb250ZW50QWxpZ25TdHlsZSA9ICdib3R0b206MDsgcmlnaHQ6MCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgX19wb3NpdGlvblN0eWxlOiBjb250ZW50QWxpZ25TdHlsZVxuICAgICAgfSk7XG5cbiAgICB9XG4gIH0iXX0=