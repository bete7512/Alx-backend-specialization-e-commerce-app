SET check_function_bodies = false;
CREATE TABLE public.products (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    product_name text NOT NULL,
    product_description text,
    product_image text,
    about_product text,
    price real,
    category_id uuid NOT NULL,
    seller_id uuid,
    quantity integer
);
CREATE FUNCTION public.average_rates_real(product_row public.products) RETURNS real
    LANGUAGE sql STABLE
    AS $$ 
    SELECT AVG(rate)
    FROM product_reviews A
    WHERE A.product_id = product_row.id;
$$;
CREATE FUNCTION public.average_rating(product_row public.products) RETURNS bigint
    LANGUAGE sql STABLE
    AS $$ 
    SELECT AVG(rate)
    FROM product_reviews A
    WHERE A.product_id = product_row.id;
$$;
CREATE FUNCTION public.product_like_counter(product_row public.products) RETURNS bigint
    LANGUAGE sql STABLE
    AS $$ select count(1) FROM likes where product_id = product_row.id;
$$;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE FUNCTION public.sync_user_table() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
    role_id UUID;
BEGIN
    IF TG_OP = 'INSERT' THEN
        SELECT id INTO role_id FROM roles WHERE name = TG_TABLE_NAME;
        INSERT INTO "users" (id, password, first_name, last_name, phone,role_id)
        VALUES (NEW.id, NEW.password, NEW.first_name, NEW.last_name, NEW.phone,role_id);
    ELSIF TG_OP = 'UPDATE' THEN
        UPDATE "users" SET
            password = NEW.password,
            first_name = NEW.first_name,
            last_name = NEW.last_name,
            phone = NEW.phone
        WHERE id = NEW.id;
    ELSIF TG_OP = 'DELETE' THEN
        DELETE FROM "users" WHERE id = OLD.id;
    END IF;
    RETURN NEW;
END;
$$;
CREATE FUNCTION public.user_carts(product_row public.products, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM cart A
    WHERE A.customer_id = CAST((hasura_session ->> 'x-hasura-user-id') as uuid)  AND A.product_id = product_row.id
);
$$;
CREATE FUNCTION public.user_favorite(product_row public.products, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM favorite A
    WHERE A.customer_id = CAST((hasura_session ->> 'x-hasura-user-id') as uuid)  AND A.product_id = product_row.id
);
$$;
CREATE FUNCTION public.user_favorites(product_row public.products, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM cart A
    WHERE A.customer_id = CAST((hasura_session ->> 'x-hasura-user-id') as uuid)  AND A.product_id = product_row.id
);
$$;
CREATE FUNCTION public.user_likes(product_row public.products, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM likes A
    WHERE A.user_id = CAST((hasura_session ->> 'x-hasura-user-id') as uuid)  AND A.product_id = product_row.id
);
$$;
CREATE FUNCTION public.user_order(product_row public.products, hasura_session json) RETURNS boolean
    LANGUAGE sql STABLE
    AS $$
SELECT EXISTS (
    SELECT 1
    FROM "order" A
    WHERE A.customer_id = CAST((hasura_session ->> 'x-hasura-user-id') as uuid)  AND A.product_id = product_row.id
);
$$;
CREATE TABLE public.admins (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    first_name text,
    last_name text,
    email text,
    password text NOT NULL,
    phone text,
    avator text
);
CREATE TABLE public.cart (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    customer_id uuid NOT NULL,
    product_id uuid NOT NULL,
    quantity integer NOT NULL
);
CREATE TABLE public.category (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    name text NOT NULL
);
CREATE TABLE public.customers (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    phone text,
    email text,
    password text NOT NULL,
    address text,
    avator text
);
CREATE TABLE public.favorite (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    product_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now()
);
CREATE TABLE public.favoritexdtxtdxgdhv (
    product_id uuid NOT NULL,
    customer_id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now(),
    id uuid DEFAULT gen_random_uuid() NOT NULL
);
CREATE TABLE public.likes (
    id uuid DEFAULT gen_random_uuid() NOT NULL,
    user_id uuid NOT NULL,
    product_id uuid NOT NULL
);
CREATE TABLE public."order" (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    customer_id uuid NOT NULL,
    status boolean DEFAULT false NOT NULL,
    product_id uuid,
    reference_id uuid
);
CREATE TABLE public.product_reviews (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    updated_at timestamp with time zone DEFAULT now() NOT NULL,
    comment text NOT NULL,
    rate real NOT NULL,
    product_id uuid NOT NULL,
    customer_id uuid
);
CREATE TABLE public.roles (
    name text NOT NULL,
    id uuid DEFAULT public.gen_random_uuid() NOT NULL
);
CREATE TABLE public.users (
    id uuid NOT NULL,
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    first_name text NOT NULL,
    last_name text NOT NULL,
    email text,
    phone text,
    password text NOT NULL,
    avator text,
    role_id uuid
);
ALTER TABLE ONLY public.admins
    ADD CONSTRAINT admin_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_pkey PRIMARY KEY (customer_id, product_id);
ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.customers
    ADD CONSTRAINT customers_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.favoritexdtxtdxgdhv
    ADD CONSTRAINT favorite_id_key UNIQUE (id);
ALTER TABLE ONLY public.favoritexdtxtdxgdhv
    ADD CONSTRAINT favorite_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_pkey1 PRIMARY KEY (id);
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
CREATE TRIGGER set_public_admin_updated_at BEFORE UPDATE ON public.admins FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_admin_updated_at ON public.admins IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_cart_updated_at BEFORE UPDATE ON public.cart FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_cart_updated_at ON public.cart IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_category_updated_at BEFORE UPDATE ON public.category FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_category_updated_at ON public.category IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_order_updated_at BEFORE UPDATE ON public."order" FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_order_updated_at ON public."order" IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_product_reviews_updated_at BEFORE UPDATE ON public.product_reviews FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_product_reviews_updated_at ON public.product_reviews IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER set_public_products_updated_at BEFORE UPDATE ON public.products FOR EACH ROW EXECUTE FUNCTION public.set_current_timestamp_updated_at();
COMMENT ON TRIGGER set_public_products_updated_at ON public.products IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE TRIGGER sync_admin AFTER INSERT OR DELETE OR UPDATE ON public.admins FOR EACH ROW EXECUTE FUNCTION public.sync_user_table();
CREATE TRIGGER sync_customers AFTER INSERT OR DELETE OR UPDATE ON public.customers FOR EACH ROW EXECUTE FUNCTION public.sync_user_table();
ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.cart
    ADD CONSTRAINT cart_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.favoritexdtxtdxgdhv
    ADD CONSTRAINT favorite_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_customer_id_fkey1 FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.favoritexdtxtdxgdhv
    ADD CONSTRAINT favorite_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.favorite
    ADD CONSTRAINT favorite_product_id_fkey1 FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.likes
    ADD CONSTRAINT likes_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."order"
    ADD CONSTRAINT order_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_customer_id_fkey FOREIGN KEY (customer_id) REFERENCES public.customers(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.product_reviews
    ADD CONSTRAINT product_reviews_product_id_fkey FOREIGN KEY (product_id) REFERENCES public.products(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.products
    ADD CONSTRAINT products_category_id_fkey FOREIGN KEY (category_id) REFERENCES public.category(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_role_id_fkey FOREIGN KEY (role_id) REFERENCES public.roles(id) ON UPDATE CASCADE ON DELETE CASCADE;
