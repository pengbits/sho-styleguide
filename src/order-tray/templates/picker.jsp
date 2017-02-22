<div class="order-picker">
  <ul>
    {{#providerOptions}}
    <li class="order-picker__provider order-picker__control">
      <span id="order-picker-provider-{{groupId}}" 
        data-provider-id="{{groupId}}" 
        class="input input--faux-radio{{#selected}} input--faux-radio-checked{{/selected}}" 
        {{^selected}} 
          data-track data-context="order tray" 
          data-label="open card"
        {{/selected}}>
        <img class="input__icon" src="http://www.sho.com/www/sho/lib/assets/svg/super-radio{{#selected}}-checked{{/selected}}_36x36.svg" />
        {{groupName}}
      </span> 
    </li>
    {{/providerOptions}}
  </ul>
  <div class="order-picker__control-group">
    <a href="#" class="order-picker__control order-picker__control--select-all">{{selectAllLabel}}</a>
    <a href="#" class="order-picker__control order-picker__control--close order-tray__close-button-summer-sixteen" data-track data-context="order tray" data-label="close">Close</a>
  </div>
</div>