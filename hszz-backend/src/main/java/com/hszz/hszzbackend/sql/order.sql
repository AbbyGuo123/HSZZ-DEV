CREATE DATABASE HSZZ;

use HSZZ;

create table HSZZ_ORDER(
		id char(10) unsigned not null auto_increment primary key,
		sourceOfTourists char(20) character set utf8 not null,
    customer char(20) character set utf8 not null,
    product char(100) character set utf8 not null,
		orderDate char(30) not null,
		count int not null,
		remarks char(100) character set utf8 null
);
alter table HSZZ_ORDER default character set utf8;
alter table HSZZ_ORDER change sourceOfTourists sourceOfTourists varchar(20) character set utf8;


insert into HSZZ_ORDER (sourceOfTourists,customer,product, orderDate, count,remarks) values("巧克力", "吴叔", "072-50ml 光瓶（含印）+外罩黑色喷哑+泵头黑色","20200524",12096,"丝印版面待确认");

insert into HSZZ_ORDER (sourceOfTourists,customer,product, orderDate, count,remarks) values("巧克力", "海文", "072/157-30ml 蒙砂瓶（含印）","20200319",1200,"加急处理");

delete from HSZZ_ORDER;