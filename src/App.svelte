<script>
   import {events, lastEventType, lastEventSymbol, lastEventTime} from './store'
   import {set} from "./firebase";
   import Button, {Group, Label} from '@smui/button';
   import dayjs from "dayjs";
   import calendar from 'dayjs/plugin/calendar'
   dayjs.extend(calendar);


   function feed(){
      console.log('feeding')
      set(`events/${new Date().getTime()}/`, 'feed');
   }
   function stab(){
      console.log('stabbing')
      set(`events/${new Date().getTime()}/`, 'stab');
   }
</script>

<main>
    <div class="logo">✨✨&nbsp;&nbsp;🐈🗡&nbsp;2000&nbsp;&nbsp;✨✨</div>
    {#if $lastEventType === 'stab'}
        <h2>Last Stabbed {dayjs($lastEventTime).calendar()}</h2>
    {:else}
        {#if $lastEventType === 'feed'}
            <h2>Last Fed {dayjs($lastEventTime).calendar()}</h2>
        {/if}
    {/if}
    <Group variant="unelevated" style="display: flex; justify-content: stretch;">
        <Button style="width: 50%" variant="outlined" on:click={feed}>🍗&nbsp;&nbsp;Feed</Button>
        <Button style="width: 50%" variant="outlined" on:click={stab}>💉&nbsp;&nbsp;Stab</Button>
    </Group>
</main>

<style>
    main {
        padding: 1em;
        max-width: 350px !important;
        margin: 0 auto;
        text-align: center;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }

    .logo {
        font-size: 30px;
        font-weight: bold;
    }

</style>
<svelte:head>
    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">

    <!-- Material Typography -->
    <link rel="stylesheet" href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css" />

    <!-- SMUI -->
    <link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>