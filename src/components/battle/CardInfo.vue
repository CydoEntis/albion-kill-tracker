<template>
  <div :class="[isKiller ? 'killer' : 'victim']">
    <div class="user-details">
      <div class="user-info">
        <p>{{ isKiller ? "⚔️" : "☠️" }} {{ username }}</p>
        <p>
          <span v-if="alliance">[{{ alliance }}]</span>
          <span v-if="guild"> {{ guild }}</span>
        </p>
      </div>
      <div class="user-stats">
        <p>Fame: {{ fame }}</p>
        <p>Item Power: {{ itemPower }}</p>
      </div>
    </div>
    <div class="equipment">
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.mainHand"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.offHand"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.head"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.armor"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.shoes"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.cape"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.bag"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.food"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.mount"
          alt=""
        />
      </div>
      <div class="image-wrapper">
        <img
          loading="lazy"
          onerror="this.src='https://images.reverb.com/image/upload/s--pjktruaP--/t_card-square/v1561460375/mfsvkxqzs0i1u6zaswdd.jpg'"
          :src="equipment.potion"
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "isKiller",
    "username",
    "alliance",
    "guild",
    "fame",
    "itemPower",
    "equipment",
  ],
};
</script>

<style lang="scss" scoped>
.killer,
.victim {
  max-width: 670px;
  /* width: 50%; */
  padding-left: 10px;
  background: #dad8d1;
}

.killer {
  border: 1px solid rgb(149, 212, 0);
  border-left: 10px solid rgb(149, 212, 0);
}

.victim {
  border: 1px solid rgb(212, 60, 0);
  border-right: 10px solid rgb(212, 60, 0);
}

.user-details {
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 2.5px 5px;

  .user-info {
    text-align: left;
  }

  .user-stats {
    text-align: right;
  }
}

.equipment {
  width: 100%;
  display: flex;

  .image-wrapper {
    min-width: 64px;

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 1405px) {
  .victim {
    border: 1px solid rgb(212, 60, 0);
    border-left: 10px solid rgb(212, 60, 0);
  }
}

@media screen and (max-width: 1200px) {
  .killer,
  .victim {
    width: 100%;
  }

  .equipment {
    flex-wrap: wrap;

    .image-wrapper {
      width: 64px;
    }
  }
}
</style>